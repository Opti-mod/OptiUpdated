import { formatString, Strings } from "@core/i18n";
import AddonPage from "@core/ui/components/AddonPage";
import PluginCard from "@core/ui/settings/pages/Plugins/components/PluginCard";
import ThemeCard from "@core/ui/settings/pages/Themes/ThemeCard";
import { VdPluginManager } from "@core/vendetta/plugins";
import { useProxy } from "@core/vendetta/storage";
import { isCorePlugin, isPluginInstalled, pluginSettings, registeredPlugins } from "@lib/addons/plugins";
import { getCurrentTheme, installTheme, themes, VdThemeInfo } from "@lib/addons/themes";
import { colorsPref } from "@lib/addons/themes/colors/preferences";
import { updateBunnyColor } from "@lib/addons/themes/colors/updater";
import { Author } from "@lib/addons/types";
import { findAssetId } from "@lib/api/assets";
import { isThemeSupported } from "@lib/api/native/loader";
import { settings } from "@lib/api/settings";
import { useObservable } from "@lib/api/storage";
import { showSheet } from "@lib/ui/sheets";
import { showToast } from "@lib/ui/toasts";
import { BUNNY_PROXY_PREFIX, VD_PROXY_PREFIX } from "@lib/utils/constants";
import { lazyDestructure } from "@lib/utils/lazy";
import { findByProps } from "@metro";
import { NavigationNative } from "@metro/common";
import { ActionSheet, BottomSheetTitleHeader, Button, Card, CompatSegmentedControl, FlashList, IconButton, TableRadioGroup, TableRadioRow, TableRowIcon, Text } from "@metro/common/components";
import React, { ComponentProps, useEffect, useState } from "react";
import { View } from "react-native";

import { UnifiedPluginModel } from "./models";
import unifyBunnyPlugin from "./models/bunny";
import unifyVdPlugin from "./models/vendetta";

const { openAlert } = lazyDestructure(() => findByProps("openAlert", "dismissAlert"));
const { AlertModal, AlertActions, AlertActionButton } = lazyDestructure(() => findByProps("AlertModal", "AlertActions"));

interface PluginPageProps extends Partial<ComponentProps<typeof AddonPage<UnifiedPluginModel>>> {
    useItems: () => unknown[];
}

function PluginPage(props: PluginPageProps) {
    const items = props.useItems();

    return <AddonPage<UnifiedPluginModel>
        CardComponent={PluginCard}
        title={Strings.PLUGINS}
        searchKeywords={[
            "name",
            "description",
            p => p.authors?.map(
                (a: Author | string) => typeof a === "string" ? a : a.name
            ).join() || ""
        ]}
        sortOptions={{
            "Name (A-Z)": (a, b) => a.name.localeCompare(b.name),
            "Name (Z-A)": (a, b) => b.name.localeCompare(a.name)
        }}
        safeModeHint={{ message: Strings.SAFE_MODE_NOTICE_PLUGINS }}
        items={items}
        {...props}
    />;
}

function PluginsList() {
    const navigation = NavigationNative.useNavigation();

    return <PluginPage
        useItems={() => {
            useProxy(VdPluginManager.plugins);
            useObservable([pluginSettings]);

            const vdPlugins = Object.values(VdPluginManager.plugins).map(unifyVdPlugin);
            const bnPlugins = [...registeredPlugins.values()].filter(p => isPluginInstalled(p.id) && !isCorePlugin(p.id)).map(unifyBunnyPlugin);

            return [...vdPlugins, ...bnPlugins];
        }}
        ListHeaderComponent={() => {
            const unproxiedPlugins = Object.values(VdPluginManager.plugins).filter(p => !p.id.startsWith(VD_PROXY_PREFIX) && !p.id.startsWith(BUNNY_PROXY_PREFIX));
            if (!unproxiedPlugins.length) return null;

            return <View style={{ marginVertical: 12, marginHorizontal: 10 }}>
                <Card border="strong">
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                        <View style={{ gap: 6, flexShrink: 1 }}>
                            <Text variant="heading-md/bold">Unproxied Plugins Found</Text>
                            <Text variant="text-sm/medium" color="text-muted">
                                Plugins installed from unproxied sources may run unverified code in this app without your awareness.
                            </Text>
                        </View>
                        <View style={{ marginLeft: "auto" }}>
                            <IconButton
                                size="sm"
                                variant="secondary"
                                icon={findAssetId("CircleInformationIcon-primary")}
                                style={{ marginLeft: 8 }}
                                onPress={() => {
                                    navigation.push("BUNNY_CUSTOM_PAGE", {
                                        title: "Unproxied Plugins",
                                        render: () => {
                                            return <FlashList
                                                data={unproxiedPlugins}
                                                contentContainerStyle={{ padding: 8 }}
                                                ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
                                                renderItem={({ item: p }: any) => <Card>
                                                    <Text variant="heading-md/semibold">{p.id}</Text>
                                                </Card>}
                                            />;
                                        }
                                    });
                                }}
                            />
                        </View>
                    </View>
                </Card>
            </View>;
        }}
        ListFooterComponent={() => __DEV__ && (
            <View style={{ alignItems: "center", justifyContent: "center", paddingTop: 16, gap: 12 }}><Button
                size="lg"
                text="Browse Plugins"
                icon={findAssetId("CompassIcon")}
                onPress={() => {
                    navigation.push("BUNNY_CUSTOM_PAGE", {
                        title: "Plugin Browser",
                        render: React.lazy(() => import("../PluginBrowser")),
                    });
                }}
            />
            </View>
        )}
        installAction={{
            label: "Install a plugin",
            fetchFn: async (url: string) => {
                if (!url.startsWith(VD_PROXY_PREFIX) && !url.startsWith(BUNNY_PROXY_PREFIX) && !settings.developerSettings) {
                    openAlert("bunny-plugin-unproxied-confirmation", <AlertModal
                        title="Hold On!"
                        content="You're trying to install a plugin from an unproxied external source. This means you're trusting the creator to run their code in this app without your knowledge. Are you sure you want to continue?"
                        extraContent={<Card><Text variant="text-md/bold">{url}</Text></Card>}
                        actions={<AlertActions>
                            <AlertActionButton text="Continue" variant="primary" onPress={() => {
                                VdPluginManager.installPlugin(url)
                                    .then(() => showToast(Strings.TOASTS_INSTALLED_PLUGIN, findAssetId("Check")))
                                    .catch(e => openAlert("bunny-plugin-install-failed", <AlertModal
                                        title="Install Failed"
                                        content={`Unable to install plugin from '${url}':`}
                                        extraContent={<Card><Text variant="text-md/normal">{e instanceof Error ? e.message : String(e)}</Text></Card>}
                                        actions={<AlertActionButton text="Okay" variant="primary" />}
                                    />));
                            }} />
                            <AlertActionButton text="Cancel" variant="secondary" />
                        </AlertActions>}
                    />);
                } else {
                    return await VdPluginManager.installPlugin(url);
                }
            }
        }}
    />;
}

function ThemesList() {
    useProxy(themes);

    return (
        <AddonPage<VdThemeInfo>
            title={Strings.THEMES}
            searchKeywords={[
                "data.name",
                "data.description",
                p => p.data.authors?.map((a: Author) => a.name).join(", ") ?? ""
            ]}
            sortOptions={{
                "Name (A-Z)": (a, b) => a.data.name.localeCompare(b.data.name),
                "Name (Z-A)": (a, b) => b.data.name.localeCompare(a.data.name)
            }}
            installAction={{
                label: "Install a theme",
                fetchFn: installTheme
            }}
            items={Object.values(themes)}
            safeModeHint={{
                message: formatString("SAFE_MODE_NOTICE_THEMES", { enabled: Boolean(settings.safeMode?.currentThemeId) }),
                footer: settings.safeMode?.currentThemeId && <Button
                    size="small"
                    text={Strings.DISABLE_THEME}
                    onPress={() => delete settings.safeMode?.currentThemeId}
                    style={{ marginTop: 8 }}
                />
            }}
            CardComponent={ThemeCard}
        />
    );
}

function ThemesOptionsSheet() {
    useObservable([colorsPref]);

    return <ActionSheet>
        <BottomSheetTitleHeader title="Options" />
        <View style={{ paddingVertical: 20, gap: 12 }}>
            <TableRadioGroup
                title="Override Theme Type"
                value={colorsPref.type ?? "auto"}
                hasIcons={true}
                onChange={type => {
                    colorsPref.type = type !== "auto" ? type as "dark" | "light" : undefined;
                    getCurrentTheme()?.data && updateBunnyColor(getCurrentTheme()!.data!, { update: true });
                }}
            >
                <TableRadioRow icon={<TableRowIcon source={findAssetId("RobotIcon")} />} label="Auto" value="auto" />
                <TableRadioRow icon={<TableRowIcon source={findAssetId("ThemeDarkIcon")} />} label="Dark" value="dark" />
                <TableRadioRow icon={<TableRowIcon source={findAssetId("ThemeLightIcon")} />} label="Light" value="light" />
            </TableRadioGroup>
            <TableRadioGroup
                title="Chat Background"
                value={colorsPref.customBackground ?? "shown"}
                hasIcons={true}
                onChange={type => {
                    colorsPref.customBackground = type !== "shown" ? type as "hidden" : null;
                }}
            >
                <TableRadioRow icon={<TableRowIcon source={findAssetId("ImageIcon")} />} label="Show" value={"shown"} />
                <TableRadioRow icon={<TableRowIcon source={findAssetId("DenyIcon")} />} label="Hide" value={"hidden"} />
            </TableRadioGroup>
        </View>
    </ActionSheet>;
}

export default function Plugins() {
    useProxy(settings);
    const showThemes = isThemeSupported();
    const [selectedTab, setSelectedTab] = useState(0);
    const navigation = NavigationNative.useNavigation();

    useEffect(() => {
        navigation.setOptions({
            title: !showThemes || selectedTab === 0 ? Strings.PLUGINS : Strings.THEMES,
            headerRight: showThemes && selectedTab === 1 ? () => (
                <IconButton
                    size="sm"
                    variant="secondary"
                    icon={findAssetId("MoreHorizontalIcon")}
                    onPress={() => showSheet("AddonMoreSheet", ThemesOptionsSheet)}
                />
            ) : undefined
        });
    }, [selectedTab, showThemes, navigation]);

    if (!showThemes) {
        return <PluginsList />;
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ paddingHorizontal: 12, paddingTop: 10, paddingBottom: 2 }}>
                <CompatSegmentedControl
                    values={[Strings.PLUGINS, Strings.THEMES]}
                    selectedSegmentIndex={selectedTab}
                    onValueChange={(index) => setSelectedTab(index)}
                />
            </View>
            {selectedTab === 0 ? <PluginsList /> : <ThemesList />}
        </View>
    );
}

import PyoncordIcon from "@assets/icons/OptiLogo.png";
import { Strings } from "@core/i18n";
import { useProxy } from "@core/vendetta/storage";
import { findAssetId } from "@lib/api/assets";
import { isFontSupported, isThemeSupported } from "@lib/api/native/loader";
import { settings } from "@lib/api/settings";
import { registerSection } from "@ui/settings";
import { version } from "bunny-build-info";

export { PyoncordIcon };

export default function initSettings() {
    registerSection({
        name: "Opti",
        items: [
            {
                key: "OPTI",
                title: () => Strings.BUNNY,
                icon: { uri: PyoncordIcon },
                render: () => import("@core/ui/settings/pages/General"),
                useTrailing: () => `(${version})`
            },
            {
                key: "OPTI_ADDONS",
                title: () => `${Strings.PLUGINS}`,
                icon: findAssetId("ActivitiesIcon"),
                render: () => import("@core/ui/settings/pages/Plugins")
            },
            {
                key: "OPTI_ADDON_HUB",
                title: () => Strings.ADDON_HUB,
                icon: findAssetId("DownloadIcon"),
                render: () => import("@core/ui/settings/pages/Addons")
            },
            {
                key: "OPTI_DEVELOPER",
                title: () => Strings.DEVELOPER,
                icon: findAssetId("WrenchIcon"),
                render: () => import("@core/ui/settings/pages/Developer"),
                usePredicate: () => useProxy(settings).developerSettings ?? false
            }
        ]
    });

    // Compat for plugins which injects into the settings
    // Flaw: in the old UI, this will be displayed anyway with no items
    registerSection({
        name: "Vendetta",
        items: []
    });
}

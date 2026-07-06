import { after } from "@lib/api/patcher";
import { onJsxCreate } from "@lib/api/react/jsx";
import { findByName } from "@metro";
import { useEffect, useState } from "react";

import { defineCorePlugin } from "..";

interface BunnyBadge {
    label: string;
    url: string;
}

const useBadgesModule = findByName("useBadges", false);

export default defineCorePlugin({
    manifest: {
        id: "bunny.badges",
        name: "Opti Badges",
        version: "1.0.0",
        description: "Adds badges to user's profile",
        authors: [{ name: "byeoon, pylix" }]
    },
    start() {
        const propHolder = {} as Record<string, any>;
        const badgeCache = {} as Record<string, BunnyBadge[]>;

        onJsxCreate("RenderedBadge", (_, ret) => {
            if (ret.props.id.match(/opti-\d+-\d+/)) {
                Object.assign(ret.props, propHolder[ret.props.id]);
            }
        });

        after("default", useBadgesModule, ([user], r) => {
            const [badges, setBadges] = useState<BunnyBadge[]>(user ? badgeCache[user.userId] ??= [] : []);

            useEffect(() => {
                if (user) {
                    fetch(`https://raw.githubusercontent.com/Opti-mod/badges/refs/heads/main/${user.userId}.json`)
                        .then(r => r.json())
                        .then(badges => setBadges(badgeCache[user.userId] = badges));
                }
            }, [user]);

            if (user) {
                badges.forEach((badges, i) => {
                    propHolder[`opti-${user.userId}-${i}`] = {
                        source: { uri: badges.url },
                        id: `opti-${i}`,
                        label: badges.label
                    };

                    r.push({
                        id: `opti-${user.userId}-${i}`,
                        description: badges.label,
                        icon: "_",
                    });
                });
            }
        });
    }
});

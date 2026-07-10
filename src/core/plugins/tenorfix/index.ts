import { findByNameLazy } from "@metro";

import { defineCorePlugin } from "..";

// credit kettu and @cocobo1 for the updated badge system

interface Badge {
    label: string;
    url: string;
}

interface CustomBadge {
    label: string;
    url: string;
}

interface UserBadgeData {
    roles?: string[];
    custom?: CustomBadge[];
}

interface BadgeData {
    [userId: string]: UserBadgeData;
}

interface RoleData {
    label: string;
    url: string;
}

interface RolesData {
    [roleName: string]: RoleData;
}

const useBadgesModule = findByNameLazy("useBadges", false);

const badgesCache = new Map<string, Badge[]>();
const badgeProps = new Map<string, Record<string, any>>();
const pendingRequests = new Set<string>();

export default defineCorePlugin({
    manifest: {
        id: "bunny.tenorfix",
        name: "Tenor Fix",
        version: "1.0.0",
        description: "Adds badges to user profiles",
        authors: [{ name: "byeoon" }],
    },

    start() {
        console.log("opti test test lalalala");
    }
});

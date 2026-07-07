import { Strings } from "@core/i18n";
import { ApplicationCommand, ApplicationCommandOptionType } from "@lib/api/commands/types";
import { BundleUpdaterManager } from "@lib/api/native/modules";

export default () => <ApplicationCommand>{
    name: "reload",
    description: "Reloads discord.",
    execute([ephemeral], ctx) {
        BundleUpdaterManager.reload();
    }
};

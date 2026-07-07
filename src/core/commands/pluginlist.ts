import { Strings } from "@core/i18n";
import { ApplicationCommand, ApplicationCommandOptionType } from "@lib/api/commands/types";
import { getDebugInfo } from "@lib/api/debug";
import { messageUtil } from "@metro/common";

export default () => <ApplicationCommand>{
    name: "pluginlist",
    description: Strings.COMMAND_DEBUG_DESC,
    options: [
        {
            name: "ephemeral",
            type: ApplicationCommandOptionType.BOOLEAN,
            description: Strings.COMMAND_DEBUG_OPT_EPHEMERALLY,
        }
    ],
    execute([ephemeral], ctx) {
        const info = getDebugInfo();
        const content = [
            "**Opti Plugin List**",
            "wip lol"
        ].join("\n");

        if (ephemeral?.value) {
            messageUtil.sendBotMessage(ctx.channel.id, content);
        } else {
            messageUtil.sendMessage(ctx.channel.id, { content });
        }
    }
};

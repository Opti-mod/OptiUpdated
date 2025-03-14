import { Strings } from "@core/i18n";
import { ApplicationCommand, ApplicationCommandOptionType } from "@lib/api/commands/types";
import { getDebugInfo } from "@lib/api/debug";
import { messageUtil } from "@metro/common";

export default () => <ApplicationCommand>{
    name: "debug",
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
            "**Opti Debug Info**",
            `> Opti: ${info.bunny.version}`,
            `> Loader: ${info.bunny.loader.name} ${info.bunny.loader.version}`,
            `> Discord: ${info.discord.version} (${info.discord.build})`,
            `-# React: ${info.react.version} (RN ${info.react.nativeVersion})`,
            `-# System: ${info.os.name} ${info.os.version} ${info.os.sdk ? `(SDK ${info.os.sdk})` : ""}`.trimEnd(),
            `-# Device: ${info.device.model} (${info.device.codename})`,
        ].join("\n");

        if (ephemeral?.value) {
            messageUtil.sendBotMessage(ctx.channel.id, content);
        } else {
            messageUtil.sendMessage(ctx.channel.id, { content });
        }
    }
};

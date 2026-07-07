import { instead } from "@lib/api/patcher";
import { findByPropsLazy } from "@metro";
import { defineCorePlugin } from "..";

let patches = [] as (() => void)[];

export default defineCorePlugin({
  manifest: {
    id: "bunny.tenorchanger",
    name: "TenorChanger",
    version: "1.0.0",
    description: "Changes the default GIF picker from Tenor to Klipy",
    authors: [{ name: "byeoon" }],
  },

  start() {
    const HTTP = findByPropsLazy("get", "post", "put");
    patches.push(
      instead("get", HTTP, (args, original) => {
        let req = args[0];
        if (typeof req === "string") {
          if (req.includes("/gifs/")) {
            if (req.includes("provider=")) {
              req = req.replace(/provider=[^&]+/, "provider=klipy");
            } else {
              req = req + (req.includes("?") ? "&" : "?") + "provider=klipy";
            }
            args[0] = req;
          }
        } else if (req && typeof req === "object") {
          if (req.url && req.url.includes("/gifs/")) {
            req.query = req.query || {};
            req.query.provider = "klipy";
          }
        }
        return original(...args);
      })
    );
  },

  stop() {
    patches.forEach(unpatch => unpatch());
    patches = [];
  }
});
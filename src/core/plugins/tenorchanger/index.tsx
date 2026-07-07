import { instead } from "@lib/api/patcher";
import { findByPropsLazy } from "@metro";
import { LoggerClass } from "@lib/utils/logger";
import { defineCorePlugin } from "..";

const logger = new LoggerClass("TenorChanger");
let patches = [] as (() => void)[];

function patchObject(obj: any, moduleId: string, path: string, visited = new Set<any>()) {
  if (!obj || typeof obj !== "object" || visited.has(obj)) return;
  visited.add(obj);

  for (const key in obj) {
    try {
      const val = obj[key];
      if (typeof val === "string") {
        if (val.includes("tenor")) {
          const replaced = val.replaceAll("tenor", "klipy");
          logger.log(`[${moduleId}] Replacing ${path}.${key}: "${val}" -> "${replaced}"`);
          obj[key] = replaced;
        } else if (val.includes("Tenor")) {
          const replaced = val.replaceAll("Tenor", "Klipy");
          logger.log(`[${moduleId}] Replacing ${path}.${key}: "${val}" -> "${replaced}"`);
          obj[key] = replaced;
        }
      } else if (val instanceof RegExp) {
        const regexStr = val.source;
        if (regexStr.includes("tenor") || regexStr.includes("Tenor")) {
          const newRegexStr = regexStr.replaceAll("tenor", "klipy").replaceAll("Tenor", "Klipy");
          logger.log(`[${moduleId}] Replacing regex ${path}.${key}: ${val} -> /${newRegexStr}/${val.flags}`);
          obj[key] = new RegExp(newRegexStr, val.flags);
        }
      } else if (typeof val === "object" && val !== null) {
        patchObject(val, moduleId, `${path}.${key}`, visited);
      }
    } catch { }
  }
}

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
        let isGifRequest = false;
        let originalReq = typeof req === "string" ? req : { ...req };

        if (typeof req === "string") {
          if (req.includes("/gifs/")) {
            isGifRequest = true;
            if (req.includes("provider=")) {
              req = req.replace(/provider=[^&]+/, "provider=klipy");
            } else {
              req = req + (req.includes("?") ? "&" : "?") + "provider=klipy";
            }
            args[0] = req;
          }
        } else if (req && typeof req === "object") {
          if (req.url && req.url.includes("/gifs/")) {
            isGifRequest = true;
            req.query = req.query || {};
            req.query.provider = "klipy";
          }
        }

        if (isGifRequest) {
          logger.log(`GIF Request Intercepted!`, {
            original: originalReq,
            modified: args[0]
          });
        }

        const result = original(...args);

        if (isGifRequest && result && typeof result.then === "function") {
          result.then((response: any) => {
            logger.log(`GIF Request Success!`, {
              url: typeof args[0] === "string" ? args[0] : args[0]?.url,
              responseStatus: response?.status,
              responseBody: response?.body || response
            });
          }).catch((err: any) => {
            logger.error(`GIF Request Error!`, {
              url: typeof args[0] === "string" ? args[0] : args[0]?.url,
              error: err
            });
          });
        }

        return result;
      })
    );

    const modules = (window as any).modules;
    if (modules) {
      for (const id in modules) {
        const m = modules[id];
        if (m && m.factory && !m.isInitialized) {
          const code = m.factory.toString();
          if (code.includes("tenor") || code.includes("Tenor")) {
            const originalFactory = m.factory;
            m.factory = function (global: any, require: any, metroImportDefault: any, metroImportAll: any, module: any, exports: any) {
              originalFactory.apply(this, arguments);
              const moduleExports = module.exports;
              if (moduleExports) {
                if (moduleExports.default) {
                  patchObject(moduleExports.default, id, "default");
                }
                patchObject(moduleExports, id, "exports");
              }
            };
          }
        }
      }

      for (const id in modules) {
        const m = modules[id];
        if (m && m.isInitialized && m.publicModule && m.publicModule.exports) {
          const exports = m.publicModule.exports;
          if (exports) {
            if (exports.default) {
              patchObject(exports.default, id, "default");
            }
            patchObject(exports, id, "exports");
          }
        }
      }
    }
  },

  stop() {
    patches.forEach(unpatch => unpatch());
    patches = [];
  }
});
import { instead } from "@lib/api/patcher";
import { findByStoreNameLazy } from "@metro";
import { defineCorePlugin } from "..";

// might only work on later versions who knows
const EXPERIMENT_ID = "2025-10-gif-providers-multi-treatment";
let patches = [] as (() => void)[];

function patchStore(store: any) {
  const context = store[Symbol.for("bunny.metro.lazyContext")];
  if (!context) return;

  const unsub = context.getExports((resolvedStore: any) => {
    if (!resolvedStore) return;

    if (typeof resolvedStore.getUserExperimentDescriptor === "function") {
      patches.push(
        instead("getUserExperimentDescriptor", resolvedStore, (args, original) => {
          const [experimentId] = args;
          if (experimentId === EXPERIMENT_ID) {
            return {
              type: "user",
              bucket: 2, // Variant 2 = Klipy, Variant 1 = Giphy
              revision: 1,
              id: EXPERIMENT_ID,
              override: true,
            };
          }
          return original(...args);
        })
      );
    }

    if (typeof resolvedStore.getGuildExperimentDescriptor === "function") {
      patches.push(
        instead("getGuildExperimentDescriptor", resolvedStore, (args, original) => {
          const [guildId, experimentId] = args;
          if (experimentId === EXPERIMENT_ID) {
            return {
              type: "user",
              bucket: 2,
              revision: 1,
              id: EXPERIMENT_ID,
              override: true,
            };
          }
          return original(...args);
        })
      );
    }

    if (typeof resolvedStore.getUserExperimentBucket === "function") {
      patches.push(
        instead("getUserExperimentBucket", resolvedStore, (args, original) => {
          const [experimentId] = args;
          if (experimentId === EXPERIMENT_ID) {
            return 2;
          }
          return original(...args);
        })
      );
    }
  });

  patches.push(unsub);
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
    const ExperimentStore = findByStoreNameLazy("ExperimentStore");
    const UserExperimentStore = findByStoreNameLazy("UserExperimentStore");

    patchStore(ExperimentStore);
    patchStore(UserExperimentStore);
  },

  stop() {
    patches.forEach(unpatch => unpatch());
    patches = [];
  }
});
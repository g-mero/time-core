import { defineConfig } from "tsdown";

// export both js and jsx
export default defineConfig([
  {
    entry: "./src/index.ts",
    unbundle: true,
    platform: "browser",
    format: ["es"],
    clean: true,
    dts: true,
    outputOptions: {
      chunkFileNames: "chunks/[hash].js",
    },
    exports: true,
  },
]);

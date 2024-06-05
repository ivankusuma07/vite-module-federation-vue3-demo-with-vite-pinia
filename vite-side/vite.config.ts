import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  cacheDir: "node_modules/.cacheDir",
  plugins: [
    vue(),
    federation({
      name: "vite-side",
      filename: "remoteEntry.js",
      remotes: {
        // "webpack-side": {
        //   external: "http://localhost:5001/remoteEntry.js",
        //   format: "esm",
        //   from: "webpack",
        // },
        "vite-side-two": {
          external: "http://localhost:5002/dist/assets/remoteEntry.js",
          format: "esm",
          from: "vite",
        },
      },
      // exposes: {
      //   "./Content": {
      //     name: "content",
      //     import: "./src/components/Content.vue",
      //   },
      //   "./Two": {
      //     name: "two",
      //     import: "./src/views/PageTwo.vue",
      //   },
      // },
      shared: ["vue", "vue-router", "pinia"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        format: "esm",
        entryFileNames: "assets/[name].js",
        minifyInternalExports: false,
      },
    },
  },
});

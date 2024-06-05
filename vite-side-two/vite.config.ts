import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  cacheDir: "node_modules/.cacheDir",
  server: {
    https: false,
    host: "localhost",
    port: 5002,
  },
  plugins: [
    vue(),
    federation({
      name: "vite-side-two",
      filename: "remoteEntry.js",
      remotes: {
        // "webpack-side": {
        //   external: "http://localhost:5001/remoteEntry.js",
        //   format: "esm",
        //   from: "webpack",
        // },
        // "vite-side": "http://localhost:5173/assets/remoteEntry.js",
      },
      exposes: {
        "./Content": {
          name: "content",
          import: "./src/components/ContentTwo.vue",
        },
        "./Counter": {
          name: "counter",
          import: "./src/components/Counter.vue",
        },
        "./Button": {
          name: "button",
          import: "./src/components/Button.vue",
        },
      },
      shared: ["vue", "vuex", "pinia"],
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

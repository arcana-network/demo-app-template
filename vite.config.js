import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// import inject from "@rollup/plugin-inject";
import builtins from "rollup-plugin-node-builtins";
import globals from "rollup-plugin-node-globals";
import nodeResolve from "rollup-plugin-node-resolve";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
      stream: "stream-browserify",
      crypto: "crypto-browserify",
    },
  },
  plugins: [vue(), globals(), builtins()],
  build: {
    chunkSizeWarningLimit: 1024,
    rollupOptions: {
      plugins: [globals(), builtins(), nodeResolve()],
    },
  },
  define: {
    "process.env": process.env,
  },
});

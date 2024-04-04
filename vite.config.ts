import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "src",
        replacement: "/src",
      },
      {
        find: "components",
        replacement: "/src/components",
      },
      {
        find: "common",
        replacement: "/src/common",
      },
      {
        find: "config",
        replacement: "/src/config",
      },
      {
        find: "icons",
        replacement: "/src/icons",
      },
      {
        find: "scss",
        replacement: "/src/scss",
      },
    ],
  },
});

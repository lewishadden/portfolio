import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import path from "path";

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
        find: "config",
        replacement: "/src/config",
      },
    ],
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default {
  plugins: [react()],
  ssgOptions: {
    crittersOptions: {
      // E.g., change the preload strategy
      preload: "body",
      fonts: true,
      // Other options: https://github.com/GoogleChromeLabs/critters#usage
    },
    script: "async",
    entry: "src/index.tsx",
  },
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
};

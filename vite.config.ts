import path from "path";
import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

const getAliases = () => ({
  "@components": path,
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src/") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      { find: "@types", replacement: path.resolve(__dirname, "src/types") },
      { find: "@pages", replacement: path.resolve(__dirname, "src/pages") },
    ],
  },
});

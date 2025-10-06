import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig(({ command }) => {
  if (command === "serve") {
    // Demo mode - serve the demo app
    return {
      plugins: [react()],
      root: ".",
      build: {
        outDir: "dist-demo",
      },
    };
  }

  // Library build mode
  return {
    plugins: [
      react(),
      dts({
        insertTypesEntry: true,
        exclude: [
          "**/*.stories.tsx",
          "**/*.test.tsx",
          "**/*.test.ts",
          "src/demo/**",
        ],
      }),
    ],
    build: {
      lib: {
        entry: resolve(__dirname, "src/index.ts"),
        name: "LumoraOTP",
        formats: ["es"],
        fileName: "index",
      },
      rollupOptions: {
        external: [
          "react",
          "react-dom",
          "react-hook-form",
          "@mui/material",
          "@mui/joy",
          "@emotion/react",
          "@emotion/styled",
        ],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
            "react-hook-form": "ReactHookForm",
            "@mui/material": "MaterialUI",
            "@mui/joy": "JoyUI",
            "@emotion/react": "EmotionReact",
            "@emotion/styled": "EmotionStyled",
          },
        },
      },
    },
  };
});

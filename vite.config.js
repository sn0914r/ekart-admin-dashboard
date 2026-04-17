import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ["https://annette-nondesignate-cryptically.ngrok-free.dev"],
    host: true,
  },
  plugins: [
    react({
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
  ],

  // resolve: {
  //   alias: {
  //     "@shared": path.resolve(__dirname, "src/shared"),
  //     "@features": path.resolve(__dirname, "src/features"),
  //     "@lib": path.resolve(__dirname, "src/lib"),
  //     "@assets": path.resolve(__dirname, "src/assets"),
  //     "@utils": path.resolve(__dirname, "src/utils"),
  //     "@constants": path.resolve(__dirname, "src/constants"),
  //   }
  // }
});

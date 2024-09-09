import { defineConfig } from "astro/config";
import basicSsl from "@vitejs/plugin-basic-ssl";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://sandrobeltran.github.io",
  base: "/froot-loops-ar",
  integrations: [tailwind()],
  server: {
    host: "0.0.0.0"
  },
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    }
  },
  output: "server",
  adapter: vercel()
});
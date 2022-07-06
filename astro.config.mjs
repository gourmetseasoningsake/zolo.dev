import { defineConfig } from 'astro/config';

import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  srcDir: "./src", // default
  publicDir: "./public", // default
  outDir: "./dist", // default
  site: "https://zolo.dev",
  trailingSlash: "ignore", // default
  build: {
    format: "directory", // default
  },
  server: {
    host: false, // default
    port: 3000, // default
  },
  // vite: {},
  integrations: [vue(), tailwind()]
});
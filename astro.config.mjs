import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

process.env.BROWSER = "firefox developer edition";

// https://astro.build/config
export default defineConfig({
  srcDir: "./src", // default
  publicDir: "./public", // default
  outDir: "./temp_dist", // default
  site: "https://zolo.dev",
  trailingSlash: "ignore", // default
  build: {
    format: "directory" // default
  },
  server: {
    host: false, // default
    port: 3000 // default
  },
  vite: {
    server: {
      open: true,
      https: {
        key: "/Users/jerome/.localssl/localhost+2-key.pem",
        cert: "/Users/jerome/.localssl/localhost+2.pem"
      }
    }
  },
  integrations: [vue(), tailwind(), sitemap()]
});
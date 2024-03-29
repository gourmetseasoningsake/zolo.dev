import {defineConfig} from "astro/config";
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: cloudflare({mode: "directory"}),
  srcDir: "./src", // default
  publicDir: "./public", // default
  outDir: "./pages",
  site:
    process.env.NODE_ENV === "production"
      ? "https://zolo.dev"
      : "https://localhost:3000",
  trailingSlash: "ignore", // default
  server: {
    host: false, // default
    port: 3000, // default
  },
  ...(process.env.NODE_ENV === "production"
    ? {}
    : {
        vite: {
          server: {
            open: true,
            https: {
              key: "/Users/jerome/.localssl/localhost+2-key.pem",
              cert: "/Users/jerome/.localssl/localhost+2.pem",
            },
          },
        },
      }),
  integrations: [
    vue(),
    tailwind(),
    sitemap({
      filter: (page) => page !== "https://zolo.dev/",
    }),
  ],
});

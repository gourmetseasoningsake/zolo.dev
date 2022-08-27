import { defineConfig } from 'astro/config'

import vue from "@astrojs/vue"
import tailwind from "@astrojs/tailwind"


process.env.BROWSER = "firefox developer edition"

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
  vite: {
    server: {
      open: true,
      https: {
        key: "/Users/jerome/.localssl/server.key",
        cert: "/Users/jerome/.localssl/server.crt"
      }
    }
  },
  integrations: [vue(), tailwind()]
})
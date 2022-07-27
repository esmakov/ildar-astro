import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), tailwind()],
  build: {
    rollupOptions: {
      external: [
        "/engagement_webp/lenny_jenny/*.webp",
        "/engagement_webp/eugene_felina/*.webp",
      ],
    },
  },
});

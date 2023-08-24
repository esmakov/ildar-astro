import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  output: "hybrid",
  adapter: vercel(),
  integrations: [
    tailwind(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  // vite: {
  //   ssr: {
  //     external: ["dotenv", "nodemailer"],
  //   },
  // },
});

import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import lunaria from "@lunariajs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        lunaria({
          sync: true,
          configPath: "./lunaria.config.json",
        }),
      ],
      title: "Discloud Docs",
      defaultLocale: "pt",
      locales: {
        en: {
          label: "English",
          locale: "en",
        },
        pt: {
          label: "Português",
          locale: "pt",
        },
      },
      social: {
        github: "https://github.com/discloud",
        twitter: "https://twitter.com/discloudbot",
        discord: "https://discord.gg/rJBJqkHppW",
        instagram: "https://www.instagram.com/discloudbot/",
        youtube: "https://www.youtube.com/channel/UC9Q6b8Zb0Z1Jj5r6Z3Zvzjw",
      },
      logo: {
        alt: "Discloud Logo",
        src: "./src/assets/logo-no_background.png",
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
      lastUpdated: true,
      /*       components: {
        Header: "./src/components/Header.astro",
      } */
    }),
  ],
});

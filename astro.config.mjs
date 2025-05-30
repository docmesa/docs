// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.docmesa.com",
  integrations: [
    starlight({
      title: "Docmesa Docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/docmesa/docs",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});

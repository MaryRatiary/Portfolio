import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://marioportfoliio.netlify.app',
  trailingSlash: 'always',
  build: { format: 'directory' },
  i18n: { defaultLocale: 'fr', locales: ['fr', 'en'], routing: { prefixDefaultLocale: false } },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'fr', locales: { fr: 'fr-FR', en: 'en-US' } },
      filter: (page) => !/\/(404|merci|thanks)\//.test(page),
    }),
  ],
});

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

// IMPORTANT: replace `site` with the production URL during design-theme phase.
// The seo-ai-optimize phase will also populate the `redirects` map from url-map.json.
export default defineConfig({
  site: 'https://www.bachelorettepoledancingparties.com',
  trailingSlash: 'never',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      lastmod: new Date(),
      filter: (page) =>
        !page.includes('/draft/') &&
        !page.includes('/_theme-preview') &&
        !page.endsWith('/thanks'),
    }),
    compress({
      HTML: true,
      CSS: true,
      JavaScript: true,
      Image: false, // Astro handles images already
      SVG: true,
    }),
  ],
  // Populated by seo-ai-optimize from url-map.json
  redirects: {
    '/about-us': '/about',
    '/home': '/',
    '/homepage': '/',
    '/reviews/category/Reviews': '/reviews',
    '/reviews/some-happy-customers': '/reviews',
    '/reviews/tag/Google': '/reviews',
    '/reviews/tag/Testimonials': '/reviews'
  },
});

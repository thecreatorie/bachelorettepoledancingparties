# Astro Starter — site-transfer

This is the per-site Astro project scaffold. The `site-transfer` Cowork plugin's `design-theme` skill copies this into each site folder and customizes the tokens, components, and content based on the site's `brand.json`.

## What's included

- Astro 4 + TypeScript (strict).
- `@astrojs/sitemap` integration (auto-generates `/sitemap-index.xml`).
- `astro-compress` for HTML/CSS/JS minification.
- Self-hosted fonts via `fontsource` (added during design-theme).
- Sharp-based image optimization with responsive `srcset`.
- A minimal but production-ready component library: Header/Footer/Nav/MobileNav, Hero, SectionHeader, Card, Button, ContactForm, BookingEmbed, Embed (YouTube/Vimeo), BlogCard, SchemaJsonLd.
- Blog content collection wired with `legacyUrl` field for redirect mapping.
- 404 page, /thanks page, /contact page with form, /index with hero + service cards.
- robots.txt, llms.txt, .well-known/ai.txt for AI visibility.
- GitHub Actions deploy workflow for GitHub Pages.

## Local dev

```bash
npm install
npm run dev
```

Open http://localhost:4321.

## Build

```bash
npm run build
npm run preview
```

## Required env vars (for forms)

Set in `.env` locally and as GitHub Actions secrets for deploy:

```
PUBLIC_FORMSPREE_CONTACT=https://formspree.io/f/your-id
PUBLIC_FORMSPREE_NEWSLETTER=https://formspree.io/f/your-id
```

## Customization points

The migration plugin replaces these per-site:

- `src/styles/tokens.css` — all design tokens from `brand.json`.
- `astro.config.mjs` — `site` URL, `redirects` map.
- `src/components/Header.astro` — logo, nav items.
- `src/components/Footer.astro` — footer columns, contact info.
- `src/content/blog/*.md` — migrated blog posts.
- `src/pages/*.astro` — migrated marketing/static pages.
- `public/robots.txt`, `public/llms.txt` — populated with the live domain and site outline.

## Build targets

- Lighthouse mobile Performance ≥ 95.
- Lighthouse SEO 100.
- Lighthouse Accessibility ≥ 95.
- Lighthouse Best Practices 100.
- 0 axe-core violations (WCAG 2.1 AA).

# JMAC Services website

Static marketing site for JMAC Services LLC.
Stack: Astro (static output) + Tailwind CSS v4 + TypeScript (strict).

## Commands

| Command           | What it does                                   |
| ----------------- | ---------------------------------------------- |
| `npm install`     | Install dependencies (Node 22.23.4 or newer)   |
| `npm run dev`     | Dev server at http://localhost:4321            |
| `npm run check`   | Type-check `.astro` and `.ts` files            |
| `npm run build`   | Type-check, then build static site to `dist/`  |
| `npm run preview` | Serve the built `dist/` locally                |

## Structure

- `src/config/site.ts`: phone, email, Facebook link, tagline, services, steps. Edit copy here.
- `src/components/`: one component per page section.
- `src/layouts/BaseLayout.astro`: head, fonts (self-hosted via Fontsource), SEO meta, LocalBusiness JSON-LD.
- `src/styles/global.css`: Tailwind import and design tokens (brand blue `#0030c0` is from the logo).
- `src/assets/`: logo and hero photo (processed by Astro into optimized WebP).
- `public/`: files served as-is (favicon).

## Before launch

- Replace `src/assets/hero.jpg` with JMAC's own job photo (current one is a stand-in crop).
- Replace the three placeholder tiles in `src/components/Work.astro` with real job photos.
- Set `site` in `astro.config.mjs` once the domain is known (canonical URLs, sitemap).
- Swap the placeholder favicon in `public/favicon.svg`.
- Confirm services, process-step copy, and email address with the owner.
- Add Meta Pixel / conversion tracking before running Facebook ads.

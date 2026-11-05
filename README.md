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

- `src/config/site.ts`: phone, email, Facebook link, tagline, services, steps, photo/video data. Edit copy here.
- `src/components/`: one component per page section.
- `src/layouts/BaseLayout.astro`: head, fonts (self-hosted via Fontsource), SEO meta, LocalBusiness JSON-LD.
- `src/styles/global.css`: Tailwind import and design tokens (brand blue `#0030c0` is from the logo).
- `src/assets/`: every image imported by a component (logo, hero photo, service icons, job photos), processed by Astro into optimized WebP at build time.
  - `src/assets/icons/`: the "What we do" service icons.
  - `src/assets/work/`: job photos used in the "Our work" and "Custom builds" galleries.
- `public/`: files served as-is, unprocessed (favicon).
- `assets-source/`: raw, unprocessed source material kept for reference — not imported by any component. Web-ready copies used on the site live under `src/assets/` instead.
  - `assets-source/photos/`: original client-provided job photos (including unconverted `.HEIC` files).
  - `assets-source/icons/`: original service icon PNGs as delivered.
  - `assets-source/logo/`: master logo file.
  - `assets-source/video-frames/`: extracted video poster frames (not currently used; videos are embedded live from Facebook).

## Before launch

- Set `site` in `astro.config.mjs` once the domain is known (canonical URLs, sitemap).
- Swap the placeholder favicon in `public/favicon.png`.
- Confirm services, process-step copy, and email address with the owner.
- Add Meta Pixel / conversion tracking before running Facebook ads.

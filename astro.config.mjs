// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Fully static site: `astro build` writes plain HTML/CSS/JS to ./dist
  output: 'static',
  // GitHub Pages project site. Update `site` (and drop `base`) if a custom domain is set up later.
  site: 'https://byrdman-dev.github.io',
  base: '/jmac-services-website',
  vite: {
    plugins: [tailwindcss()],
  },
});

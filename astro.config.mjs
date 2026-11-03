// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Fully static site: `astro build` writes plain HTML/CSS/JS to ./dist
  output: 'static',
  // Set this once the production domain is known (needed for canonical URLs and a sitemap):
  // site: 'https://www.example.com',
  vite: {
    plugins: [tailwindcss()],
  },
});

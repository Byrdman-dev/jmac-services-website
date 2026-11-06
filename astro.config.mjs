// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Fully static site: `astro build` writes plain HTML/CSS/JS to ./dist
  output: 'static',
  site: 'https://jmacservicesllc.com',
  vite: {
    plugins: [tailwindcss()],
  },
});

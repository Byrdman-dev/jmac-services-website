// Base-aware internal page routes (site is served under the GitHub Pages
// `base` path configured in astro.config.mjs). Import these instead of
// hardcoding "/..." hrefs so links keep working if the base path changes.

const RAW_BASE = import.meta.env.BASE_URL;
const BASE = RAW_BASE.endsWith('/') ? RAW_BASE : `${RAW_BASE}/`;

export const routes = {
  home: BASE,
  services: `${BASE}services`,
  ourWork: `${BASE}our-work`,
  customBuilds: `${BASE}custom-builds`,
  about: `${BASE}about`,
  contact: `${BASE}contact`,
};

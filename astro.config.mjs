// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), icon()],

  vite: {
    // @ts-ignore - tailwindcss vite plugin types are incompatible with Astro's Vite types in this project
    plugins: [tailwindcss()],
  },
});
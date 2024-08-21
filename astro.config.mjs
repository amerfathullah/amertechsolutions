import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from '@astrojs/vercel/serverless';
import AstroPWA from '@vite-pwa/astro';
export default defineConfig({
  site: 'https://amertechsolutions.amerfathullah.com/',
  integrations: [tailwind(),  sitemap(), AstroPWA()],
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
});
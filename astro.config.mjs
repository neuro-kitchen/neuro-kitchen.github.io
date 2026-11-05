// @ts-check
import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // Change this when you add a custom domain (e.g. https://neurokitchen.dev)
  site: 'https://neuro-kitchen.github.io',

  // Emit fonts as files instead of inlining small ones as data: URIs,
  // so the font-src 'self' policy below covers them.
  vite: { build: { assetsInlineLimit: 0 } },

  // Adds a Content-Security-Policy <meta> tag to every page. Astro hashes the
  // inline scripts and styles it emits, so only those run. Everything else
  // (fonts, images, connections) must come from this site.
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'none'",
        'upgrade-insecure-requests',
      ],
    },
  },
});

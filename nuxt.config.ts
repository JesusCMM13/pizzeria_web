// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-10-01',
  devtools: { enabled: true },

  // Web 100 % estática: `npm run generate` crea .output/public listo para GitHub Pages
  ssr: true,
  nitro: {
    preset: 'github-pages',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/carta', '/galeria', '/contacto'],
    },
  },

  app: {
    // Con dominio propio la web se sirve en la raíz, así que baseURL = '/'.
    // Si algún día la publicas en usuario.github.io/nombre-repo, cambia esto a '/nombre-repo/'.
    baseURL: '/pizzeria_web/',
    head: {
      htmlAttrs: { lang: 'es' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#2A211C' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Caprasimo&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap',
        },
      ],
    },
  },

  css: ['~/assets/css/main.css'],
})

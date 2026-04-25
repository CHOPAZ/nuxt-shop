// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/scripts',
    '@nuxt/icon',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
  ],
  app: {
    head: {
      title: 'Магазин SHOPPE',
      htmlAttrs: {
        lang: 'ru',
      },
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' },
        { rel: 'manifest', crossorigin: 'anonymous', href: '/manifest.webmanifest' },
      ],
    },
  },
  routeRules: {
    '/auth/': { redirect: '/auth/login' },
    '/login/': { redirect: '/auth/login' },
  },
  icon: {
    customCollections: [
      {
        prefix: 'icons',
        dir: './app/assets/icons',
      },
    ],
  },
  runtimeConfig: {
    token: '',
    public: {
      apiurl: '',
      imageurl: '',
    },
  },
  postcss: {
    plugins: {
      'postcss-nested': {},
    },
  },
})

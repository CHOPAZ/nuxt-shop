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
  routeRules: {
    '/about': { prerender: true },
    '/': { swr: true },
    '/catalog/**': { swr: 3600 },
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

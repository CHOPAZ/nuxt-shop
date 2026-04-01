// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxt/scripts",
    "@nuxt/icon",
  ],
  icon: {
    customCollections: [
      {
        prefix: "icons",
        dir: "./app/assets/icons",
      },
    ],
  },
  postcss: {
    plugins: {
      "postcss-nested": {},
    },
  },
});

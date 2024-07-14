// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: "https://dummyjson.com",
    },
  },

  modules: ["nuxt-swiper", "@pinia/nuxt"],
  devtools: { enabled: false },
  css: ["@/assets/sass/main.scss"],
  compatibilityDate: "2024-07-11",
});
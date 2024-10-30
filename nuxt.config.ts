// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "vue3-carousel-nuxt", "@vueuse/nuxt"],
  css: ["@/assets/css/main.css"],
  imports: {
    dirs: ["types/*.ts", "types/**/*.ts"],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    authSecret: process.env.AUTH_SECRET,
    mongodbUri: process.env.MONGODB_URI,
  },
  app: {
    head: {
      htmlAttrs: { "data-theme": "black" },
    },
  },
});

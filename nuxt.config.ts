// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    sharedPrerenderData: false,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateRouteInjection: true,
    relativeWatchPaths: true,
    defaults: {
      useAsyncData: {
        deep: true,
      },
    },
  }, 

  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false,
    },
  },

  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxt/icon"],
  app : {
    baseURL : "/aladia_nuxt_test_project/"
  }
  
});
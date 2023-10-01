export default defineNuxtConfig({
  devtools: { enabled: true },
  // @ts-ignore
  runtimeConfig: {
    public: {
      baseURL: "http://localhost:8000/api/v1"
    }
  },
  app: {
    head: {
      title: 'Nuxt App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'App Description' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [],
      script: []
    }
  },
  modules: [
    "nuxt-lodash",
    ["@pinia/nuxt", { autoImports: ["defineStore", "storeToRefs"] }],
    "@pinia-plugin-persistedstate/nuxt",
    ["@nuxtjs/i18n", { vueI18n: './i18n.config.ts' }],
    ["nuxt-quasar-ui", {}]
  ],
  piniaPersistedstate: {
    cookieOptions: { sameSite: 'strict' },
    storage: "cookies"
  },
  extends: [
    "@modules/auth",
    "@modules/test",
  ]
})

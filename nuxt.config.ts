export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    account_type: 'vendor',
    ofetch: {
      baseURL: "http://localhost:8000/api/v1",
      credentials: "include",
      watch: false,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    },
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
    ["nuxt-viewport", { /* Options */ }],
    "nuxt-quasar-ui",
    "@sidebase/nuxt-auth",
    "nuxt-lodash",
    ["@pinia/nuxt", { autoImports: ["defineStore", "storeToRefs"] }],
    "@pinia-plugin-persistedstate/nuxt",
    ["@nuxtjs/i18n", { vueI18n: './i18n.config.ts' }]
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

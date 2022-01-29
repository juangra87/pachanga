const LOCALES = [
  { code: 'en', iso: 'en', file: 'en.json' },
  { code: 'es', iso: 'es', file: 'es.json' },
]
const DEFAULT_LOCALE = 'es'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'pachanga',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'},
    ],
    link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
  },

  target: 'static',
  router: {
    base: '/pachanga/'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,


  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // i18n
  i18n: {
    detectBrowserLanguage: false,
    strategy: 'prefix_and_default',
    pages: {},
    locales: LOCALES,
    langDir: '~/i18n/',
    defaultLocale: DEFAULT_LOCALE,
    fallbackLocale: DEFAULT_LOCALE
  },
}

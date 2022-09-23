import axios from 'axios'
const { API_SECRET_KEY } = process.env

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'my-blog',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/sanitize-html'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_BASE_URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        autoprefixer: {},
      },
    },
  },
  generate: {
    async routes() {
      const limit = 10
      const range = (start, end) =>
        [...Array(end - start + 1)].map((_, i) => start + i)
      const pages = await axios
        .get(
          'https://sh1vxj4xaz.microcms.io/api/v1/otblog?limit=0',
          {
            headers: {
              'X-MICROCMS-API-KEY':
                process.env.API_SECRET_KEY,
            },
          }
        )
        .then((res) =>
          range(
            1,
            Math.ceil(res.data.totalCount / limit)
          ).map((p) => ({
            route: `/page/${p}`,
          }))
        )
      return pages
    },
  },
  privateRuntimeConfig: {
    apiKey: API_SECRET_KEY,
  },
  publicRuntimeConfig: {
    apiKey:
      process.env.NODE_ENV !== 'production'
        ? API_SECRET_KEY
        : undefined,
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'page',
        path: '/page/:p',
        component: resolve(__dirname, 'pages/index.vue'),
      })
    },
  },
  loading: '~/components/loading.vue',
}

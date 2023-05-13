import colors from 'vuetify/es5/util/colors'
import dotenv from 'dotenv'

const envPath = `env/.env.${process.env.NODE_ENV}`
dotenv.config({ path: envPath })
export default {
  target: 'server',
  ssr: true,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - nuxt-pinia',
    title: 'nuxt-pinia',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vuetify.ts'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/composition-api/module',
    '@nuxtjs/vuetify',
    '@nuxtjs/svg',
    [
      '@nuxt/typescript-build',
      {
        typeCheck: {
          typescript: {
            extensions: {
              vue: true
            }
          }
        }
      }
    ],
    ['@pinia/nuxt', { disableVuex: false }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/proxy', 'nuxt-route-meta'],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    baseURL: process.env.AXIOS_BASE_URL,
    proxyHeaders: false,
    credentials: false
  },
  proxy: {
    '/api/': {
      target: process.env.API_SERVER,
      pathRewrite: { '^/api': '' },
      changeOrigin: true
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    html: {
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    },

    transpile: ['vuetify/lib'],

    loaders: {
      extend(config, ctx) {}
    },

    babel: {
      compact: true
    }
  }
}

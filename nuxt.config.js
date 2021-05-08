export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'eshiritori_frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      { rel: "stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" }

    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/style.css',
  ],
  router:{
    middleware:["clearValidationErrors"]
  },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "./plugins/mixins/user.js",
    "./plugins/axios.js",
    "./plugins/mixins/validation.js",
    { src: '~/plugins/infiniteloading', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
  ],
  axios:{
    credentials: true,
    baseURL:'http://localhost:8000/api'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}

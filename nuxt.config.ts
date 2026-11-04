export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/fonts.css', '~/assets/css/base.css'],
  components: [
    { path: '~/components', pathPrefix: false },
    { path: '~/views', pathPrefix: false },
  ],
  app: {
    head: {
      title: 'Круизы по Байкалу',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
      ],
    },
  },
})

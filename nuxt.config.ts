import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: 'FindZeMovie',
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['~/assets/css/main.css'],

  buildModules: ['@unocss/nuxt', '@pinia/nuxt'],

  unocss: {
    uno: true,
    preflight: true,
    icons: {
      scale: 1.2,
    },
  },

  publicRuntimeConfig: {
    tmdb: {
      TMDB_API_KEY: process.env.TMDB_API_KEY
    }
  },
})

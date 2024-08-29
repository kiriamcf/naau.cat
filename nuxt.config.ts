// https://nuxt.com/docs/api/configuration/nuxt-config

const defaultTheme = require('tailwindcss/defaultTheme')

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxt/icon'],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
          },
          colors: {
            'background': '#110c09',
            'green': '#A5D6A7'
          }
        }
      }
    }
  },
  googleFonts: {
    families: {
      Poppins: true,
    }
  }
})
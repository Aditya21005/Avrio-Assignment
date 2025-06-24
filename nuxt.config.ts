export default defineNuxtConfig({
  // Remove the CSS import since the module handles it
  // css: ['~/assets/tailwind.css'],
  build: { 
    transpile: ['vue-chartjs'] 
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    }
  }
})
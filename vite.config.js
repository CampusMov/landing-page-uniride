import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  darkMode: false,
  plugins: [vue()],
  base: "https://campusmov.github.io/landing-page-uniride/",
})

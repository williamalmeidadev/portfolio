import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { webfontDl } from 'vite-plugin-webfont-dl'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    webfontDl()
  ],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { webfontDl } from 'vite-plugin-webfont-dl'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    webfontDl()
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('gsap')) {
              return 'vendor-gsap';
            }
            if (id.includes('react')) {
              return 'vendor-react';
            }
            return 'vendor';
          }
        }
      }
    }
  }
})

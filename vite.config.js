import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    sourcemap: false,
    sourcemapExcludeSources: true,
    rollupOptions:{
      output: {
        entryFileNames: `assets/main.js`,
        assetFileNames: `assets/main.[ext]`
      }
    }
  },
  css: {
    devSourcemap: true // this one
  }
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // Ganti 'hendri-abadi' dengan nama repo GitHub Anda
  base: '/hendri.abadi/',
  plugins: [vue()],
  server: {
    port: 3000,
    host: true,
    open: false
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    outDir: 'dist'
  }
})

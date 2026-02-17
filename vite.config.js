import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // ✅ Fast Tailwind build + auto optimization
  ],
  
  css: {
    devSourcemap: false, // ✅ disables heavy CSS source maps for faster reloads
  },
  server: {
    open: true, // ✅ auto opens browser on start
    hmr: {
      overlay: false, // ✅ hides red error overlay that slows reload
    },
  },
})

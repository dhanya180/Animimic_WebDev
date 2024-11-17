import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Increase the chunk size warning limit (e.g., to 1000 KB)
    chunkSizeWarningLimit: 2000, 

    // Configure manual chunking (e.g., separate node_modules into a 'vendor' chunk)
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // This will bundle all node_modules into a separate 'vendor' chunk
          }
        }
      }
    }
  }
})

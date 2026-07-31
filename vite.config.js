import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true
  },
  build: {
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'animation-vendor': ['framer-motion', 'gsap'],
          'ui-vendor': ['lucide-react', 'class-variance-authority', 'clsx', 'tailwind-merge']
        }
      }
    },
    // Enable source maps for production debugging
    sourcemap: false,
    // Minify CSS
    cssMinify: true,
    // Chunk size warning limit
    chunkSizeWarningLimit: 1000
  },
  // Optimize asset handling
  assetsInclude: ['**/*.mp4', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg'],
  // Define global constants
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  }
});

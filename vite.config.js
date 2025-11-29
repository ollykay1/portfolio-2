import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
// });

export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(), // auto-split common vendor deps
  ],
  build: {
    // Raise the warning threshold to avoid noisy logs (optional)
    chunkSizeWarningLimit: 1000, // 1 MB

    rollupOptions: {
      output: {
        // Manually split heavy libraries into separate chunks
        manualChunks: {
          react: ['react', 'react-dom'],
          framer: ['framer-motion'],
          icons: ['lucide-react'],
          router: ['react-router', 'react-router-dom'],
          // Add more groups here if you use other big libs:
          // charts: ['chart.js', 'recharts'],
          // utils: ['lodash', 'dayjs'],
        },
      },
    },
    // Generate smaller chunks with better caching
    sourcemap: false, // turn on (true) if you need debugging in production
    minify: 'esbuild',
    target: 'esnext',
  },
});


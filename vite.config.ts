/// <reference types="vite-plugin-svgr/client" />
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
    svgr(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'icons-vendor': ['@ant-design/icons'],
          'i18n-vendor': ['i18next', 'react-i18next'],
          'utility-vendor': ['@tanstack/react-query', 'axios', 'zustand'],
        },
      },
    },
    chunkSizeWarningLimit: 1024,
    sourcemap: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});

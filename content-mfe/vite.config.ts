import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'content',
      filename: 'remoteEntry.js',
      exposes: {
        './Content': './src/App'
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    target: 'esnext',
    modulePreload: false,
    minify: false,
    cssCodeSplit: false
  },
  server: {
    port: 5002,
    cors: true
  },
  preview: {
    port: 5002,
    cors: true
  }
}); 
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/canvas-sketch/',
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          GOOGLE_ANALTICS_ID: process.env.GOOGLE_ANALTICS_ID ?? 'UA-24399886-3'
        }
      }
    })
  ],
  resolve: {
    alias: [{ find: 'src', replacement: path.resolve(__dirname, 'src') }]
  }
});

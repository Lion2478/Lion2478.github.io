// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "src/styles/global.css";'
        }
      }
    }
  },
  build: {
    inlineStylesheets: 'auto'
  },
  compressHTML: true
});

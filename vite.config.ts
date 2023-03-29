import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'C:/users/olgan/documents/web1it/src')
    }
  },
  plugins: [react()]
})
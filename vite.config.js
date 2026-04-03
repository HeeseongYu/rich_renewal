import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 테일윈드 v4 플러그인 경로

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
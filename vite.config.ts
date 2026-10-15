import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' keeps the built files working from any folder or sub-path.
export default defineConfig({
  plugins: [react()],
  base: './',
})

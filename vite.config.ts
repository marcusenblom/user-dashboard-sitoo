import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths"; // Import plugin

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000,
  },
})

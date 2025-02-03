import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
  },
})

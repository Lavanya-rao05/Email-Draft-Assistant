import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import typography from '@tailwindcss/typography';

export default defineConfig({
  plugins: [react(),tailwindcss(),typography],
  server: {
    historyApiFallback: true,
    proxy: {
      '/email': {
        target: 'https://email-draft-assistant.onrender.com',
        changeOrigin: true,
        secure: false,
      },
      '/emails': {
        target: 'https://email-draft-assistant.onrender.com',
        changeOrigin: true,
        secure: false,
      },
      '/generate-email': {
        target: 'https://email-draft-assistant.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});



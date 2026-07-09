import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'

const entry = (path) => fileURLToPath(new URL(path, import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  // Multi-page build: the landing page plus standalone Support, Privacy, and
  // Terms pages. These emit as /support.html, /privacy.html and /terms.html at
  // the site root, which GitHub Pages also serves at the clean paths /support,
  // /privacy and /terms — real, directly-loadable URLs suitable for the App
  // Store listing.
  build: {
    rollupOptions: {
      input: {
        main: entry('./index.html'),
        support: entry('./support.html'),
        privacy: entry('./privacy.html'),
        terms: entry('./terms.html'),
      },
    },
  },
})

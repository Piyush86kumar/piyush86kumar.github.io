import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT — GitHub Pages base path:
// - If this repo will be deployed at https://<username>.github.io/  (a USER page,
//   repo must be named exactly "<username>.github.io"), keep base as '/'.
// - If this repo will be deployed at https://<username>.github.io/<repo-name>/  (a
//   PROJECT page), change base below to '/<repo-name>/'.
// See README.md "Deploying" section for details.
export default defineConfig({
  base: '/',
  plugins: [react()],
})

import path from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: path.resolve(process.cwd(), 'playground'),
  resolve: {
    alias: {
      '@engine': path.resolve(process.cwd(), 'src/ts/index.ts'),
      '@styles': path.resolve(process.cwd(), 'src/styles')
    }
  }
})

import { defineConfig } from 'vitest/config'
import { createVitestConfig } from '@arts/wp-plugin-tooling/vitest'

export default defineConfig(createVitestConfig({ defineKey: '__DEFINE_KEY__' }))

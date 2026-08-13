import process from 'node:process'

export default {
  slug: '__SLUG__',
  versionConstant: '__VERSION_CONSTANT__',
  defineKey: '__DEFINE_KEY__',
  esbuildTarget: 'es2022',
  entry: { ts: './src/ts/boot.ts', sass: './src/styles/index.scss' },
  bundles: [],
  bannerLines: [],
  zip: { budgetMb: 0.5 },
  paths: { php: './src/php', plugin: './src/wordpress-plugin', dist: './dist' },
  // Machine-specific: the Local site's plugin dir, from the gitignored .env (DEV_TARGET)
  devTarget: process.env.DEV_TARGET ?? null,
  vendor: { autoloaderOnly: true, autoloaderSuffix: null },
  blueprint: null
}

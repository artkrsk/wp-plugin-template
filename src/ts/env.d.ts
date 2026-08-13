// esbuild `define` substitutes `import.meta.env.DEV` in plugin builds; Vite
// defines it in the playground. The optional access (`?.`) keeps any other
// bundler safe. Ambient augmentation keeps the exact built-in name.
interface ImportMeta {
  readonly env?: {
    readonly DEV?: boolean
  }
}

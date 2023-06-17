import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
  target: 'es2020',
  dts: true,
  clean: true,
  outDir: './dist',
  splitting: false,
  sourcemap: false,
  minify: !options.watch,
  format: ['cjs', 'esm'],
  entry: ['src/**/*.ts'],
  tsconfig: './tsconfig.json',
}))

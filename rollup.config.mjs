import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const extensions = ['.js', '.ts', '.tsx'];

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'build/bundles/bundle.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'build/bundles/bundle.cjs.min.js',
      format: 'cjs',
      plugins: [terser()],
      sourcemap: true,
    },
    {
      file: 'build/bundles/bundle.umd.js',
      format: 'umd',
      name: 'myLibrary',
      sourcemap: true,
    },
    {
      file: 'build/bundles/bundle.umd.min.js',
      format: 'umd',
      name: 'myLibrary',
      plugins: [terser()],
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({ extensions }),
    babel({
      babelHelpers: 'bundled',
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      extensions,
      exclude: './node_modules/**',
    }),
    commonjs(),
  ],
};

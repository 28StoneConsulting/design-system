import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const extensions = ['.js', '.ts', '.tsx'];

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'build/bundles/bundle.esm.js',
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'build/bundles/bundle.esm.min.js',
      format: 'esm',
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
  ],
};

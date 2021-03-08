import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';

export default {
  input: './src/index.ts',
  output: [
    {
      dir: 'build/cjs',
      format: 'cjs',
      sourcemap: true,
    },
    {
      dir: 'build/esm',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [del({ targets: 'build/*' }), peerDepsExternal(), resolve(), commonjs(), typescript()],
};

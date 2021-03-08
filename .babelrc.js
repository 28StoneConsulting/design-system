const sharedPresets = ['@babel/preset-typescript', '@babel/preset-react'];
const shared = {
  ignore: ['src/**/*.spec.ts', 'src/**/*.stories.tsx'],
};

module.exports = {
  env: {
    esmUnbundled: {
      ...shared,
      presets: sharedPresets,
    },
    esmBundled: {
      ...shared,
      presets: [
        [
          '@babel/env',
          {
            targets: '> 0.25%, not dead',
          },
        ],
        ...sharedPresets,
      ],
    },
    cjsUnbundled: {
      ...shared,
      presets: [
        [
          '@babel/env',
          {
            modules: 'commonjs',
          },
        ],
        ...sharedPresets,
      ],
    },
  },
};

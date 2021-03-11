const path = require('path');
const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: ['../src/docs/Intro.stories.mdx', '../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/preset-create-react-app'],
  babel: async options => {
    return {
      ...options,
      plugins: [
        ...options.plugins,
        ['@emotion',
          {
            sourceMap: true,
            autoLabel: 'dev-only',
            labelFormat: '[local]',
            cssPropOptimization: true,
          }
        ]
      ],
    };
  },
  webpackFinal: async config => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/css': toPath('node_modules/@emotion/css'),
          '@emotion/core': toPath('node_modules/@emotion/react'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
          '@emotion/styled': toPath('node_modules/@emotion/styled'),
        },
      },
    };
  },
  // typescript: {
  //   reactDocgen: 'none',
  // },
};

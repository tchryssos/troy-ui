const path = require('path');

module.exports = {
  // See https://github.com/storybookjs/storybook/issues/10231#issuecomment-985589096
  features: {
    emotionAlias: false,
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    config.resolve.alias['~'] = path.resolve(__dirname, '../src/');
    return config;
  },
  // See https://github.com/storybookjs/storybook/issues/13795#issuecomment-1192075981
  managerWebpack: (config, options) => {
    options.cache.set = () => Promise.resolve();
    return config;
  },
};

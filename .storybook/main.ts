import path from 'path';

module.exports = {
  // See https://github.com/storybookjs/storybook/issues/10231#issuecomment-985589096
  features: {
    emotionAlias: false,
  },
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
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
};

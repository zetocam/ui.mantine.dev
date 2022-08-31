const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  stories: ['../**/*.story.@(js|jsx|ts|tsx)'],
  addons: ['storybook-dark-mode'],
  framework: '@storybook/react',
  output: {
    // your stuff
    publicPath: '/assets/'
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Return the altered config
    return config;
  },

};

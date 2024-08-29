const { ESBuildMinifyPlugin } = require('esbuild-loader');
const browserslistToEsbuild = require('browserslist-to-esbuild');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new ESBuildMinifyPlugin({
        target: browserslistToEsbuild(),
        css: true  // Apply minification to CSS assets
      })
    ],
  },
  performance: {
    maxAssetSize: 40000,
  },
});

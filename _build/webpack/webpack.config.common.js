// General
const path = require('path');
const sectionsEntries = require('./utils/sections');
const componentsEntries = require('./utils/components');

// Webpack plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const SizePlugin = require('size-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const browserslistToEsbuild = require('browserslist-to-esbuild');

// Directories
const rootDir = path.dirname(path.dirname(__dirname));
const configDir = path.dirname(__dirname);

const nodeDir = path.join(rootDir, 'node_modules');
const srcDir = path.join(rootDir, 'src');

const scriptsDir = path.join(srcDir, 'js');
const stylesDir = path.join(srcDir, 'css');
const assetsDir = path.join(srcDir, 'assets');

// Common configuration
module.exports = {
  // Entry
  entry: {
    main: [
      path.join(scriptsDir, 'main.js'),
      path.join(stylesDir, 'main.scss'),
    ],
    password: [
      path.join(scriptsDir, 'password.js'),
      path.join(stylesDir, 'password.scss'),
    ],
    giftcard: [
      path.join(scriptsDir, 'giftcard.js'),
      path.join(stylesDir, 'giftcard.scss'),
    ],
    product: [
      path.join(scriptsDir, 'product.js'),
    ],
    collection: [
      path.join(scriptsDir, 'collection.js'),
    ],
    jewlvision: [
      path.join(scriptsDir, 'page.jewlvision.js'),
    ],
    repairs: [
      path.join(scriptsDir, 'page.repairs.js'),
    ],
    fonts: [
      path.join(stylesDir, 'fonts.scss'),
    ],
    custom_page_base: [
      path.join(stylesDir, 'custom-page-base.scss'),
    ],
    custom_slick: [
      path.join(stylesDir, 'custom-slick.scss'),
    ],
    custom_slick_theme: [
      path.join(stylesDir, 'custom-slick-theme.scss'),
    ],
    page_fingerprint: [
      path.join(stylesDir, 'page-fingerprint.scss'),
    ],
    page_monogram: [
      path.join(stylesDir, 'page-monogram.scss'),
    ],
    page_permalinks: [
      path.join(stylesDir, 'page-permalinks.scss'),
    ],
    page_personalized: [
      path.join(stylesDir, 'page-personalized.scss'),
    ],
    page_puremark: [
      path.join(stylesDir, 'page-puremark.scss'),
    ],
    locket_app: [
      path.join(stylesDir, 'locket-app.scss'),
    ],
    custom_locket: [
      path.join(stylesDir, 'custom-locket.scss'),
    ],
    ...sectionsEntries(),
    ...componentsEntries(),
  },
  // Output
  output: {
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(rootDir, 'assets'),
    /* Remove this option to integrate it with your existing theme */
    clean: {
      keep: /^.*\.(?!css$|js$|mjs$)[^.]+$/,
    },
  },
  // Plugins
  plugins: [
    // #1: Remove empty JS files
    new RemoveEmptyScriptsPlugin(),
    // #2: Extract CSS to separate css file
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    // #3: Prints the gzipped sizes of assets.
    new SizePlugin({
      publish: false,
      writeFile: false,
    }),
    // // #4: Copy files to assets directory
    // new CopyPlugin({
    //   patterns: [{ from: assetsDir, to: '[name][ext]' }],
    // }),
  ],
  // Webpack Loaders
  module: {
    rules: [
      // #1: Bundling JavaScript
      {
        test: /\.m?js$/,
        exclude: nodeDir,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: "ie 10",
                },
              ],
            ],
            plugins: [
              '@babel/plugin-transform-modules-commonjs',
              '@babel/plugin-transform-block-scoping',
              '@babel/plugin-transform-destructuring',
              '@babel/plugin-proposal-object-rest-spread'
            ]
          },
        },
      },
      // #2: Bundling SCSS
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          // PostCSS
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: require(path.join(
                configDir,
                'postcss.config.js'
              )),
            },
          },
          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
            options: {
              additionalData: `
                @use './src/css/tools' as *;
                @use './src/css/settings/breakpoints' as *;
              `,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      styles: stylesDir,
      scripts: scriptsDir,
      // assets: assetsDir,
    },
  },
  stats: {
    preset: 'errors-warnings',
    version: false,
  },
};

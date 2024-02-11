const path = require('path');

module.exports = {
  mode: 'development',
  //multiple entry points for code splitting
  entry: {
    bundle: path.resolve(__dirname, 'src/scripts/index.js'),
    blog: path.resolve(__dirname, 'src/scripts/blog.js'),
    // contact: path.resolve(__dirname, 'src/contact.js'),
  },
  // [name] for dynamic key name of entry points
  // [contenthash] for caching
  output: {
    path: path.resolve(__dirname, 'prod/scripts'),
    // filename: '[name][contenthash].js',
    filename: '[name].js',
    clean: true, //prevents files adding up
    assetModuleFilename: '[name][ext]', //for assets
  },
  // src maps helpful for debugging - link prod with dev files for correct mapping
  // devtool: 'source-map',

  // dev server options
  /* devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  }, */

  // modules
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      // assets loader such as svg etc
      {
        test: /\.(png|svg|jpg|jpeg|webp|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};

// run npm run dev to install the webpack dev server so that it auto-reloads
// install babel for compatibility with older browsers
// npm i -D babel-loader @babel/core @babel/preset-env

// npm i -D webpack-bundle-analyzer 39:00

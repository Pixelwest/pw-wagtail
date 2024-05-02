const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  stats: {
    errorDetails: true
  },
  entry: {
    javascriptMain: './src/src/static/assets/js/main.js',
    stylesMain: './src/src/static/assets/css/main.scss',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'src/src/static/js'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/, 
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/[name].css',
    }),
  ],
  resolve: {
    fallback: {
      fs: false
    }
  },
};
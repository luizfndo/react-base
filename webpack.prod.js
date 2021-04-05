const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const config = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'app-[hash].css',
    }),
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        { loader: MiniCssExtractPlugin.loader },
        { loader: 'css-loader', options: { importLoaders: 1 } },
        'postcss-loader',
      ],
    }],
  },
});

module.exports = config;

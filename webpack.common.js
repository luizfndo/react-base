const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: [path.resolve(__dirname, 'src/index.js')],
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'React Base',
      inject: 'head',
      template: path.resolve(__dirname, 'src/template.html'),
      htmlAttrLang: 'pt-br',
      //favicon: path.resolve(__dirname, 'src/assets/img/favicon-64x64.png'),
      meta: { 'theme-color': '#FFF' },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'svg/',
            },
          },
          {
            // Uses the SVGO to optimaze the SVGs.
            loader: 'image-webpack-loader',
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'font/',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.mjs', '.js'],
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'public'),
    filename: 'app-[fullhash].js',
  },
};

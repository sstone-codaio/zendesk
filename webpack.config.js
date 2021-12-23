const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: {
    foreground: path.resolve(__dirname, "./src/index-foreground.tsx")
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [{
      test: /\.(ts|tsx)$/, 
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
        }
      }
    }, {
      test: /\.less$/i,
      use: [
        {loader: 'style-loader'},
        {loader: 'css-loader'},
        {
          // compiles Less to CSS
          loader: 'less-loader',
          options: {
            lessOptions: {
              paths: [path.resolve(__dirname)],
            },
          }
        },
      ]
    },
    {
      test: /\.html$/,
      use: ['html-loader']
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'foreground.html',
      template: 'src/foreground.html',
      chunks: ['foreground']
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/manifest.json', to: 'manifest.json' },
        { from: 'src/background.js', to: 'background.js' },
        { from: 'src/inject-script.js', to: 'inject-script.js' },
      ],
    }),
    new CleanWebpackPlugin()
  ],
};

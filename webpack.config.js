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
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        }
      }
    }, {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
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

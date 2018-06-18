'use strict';

// const webpack = require('webpack');
const path = require('path');

// Plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ExtractLessPlugin = new ExtractTextPlugin({
  filename: 'system/[name]-bundle.css',
  publicPath: '/',
});


module.exports = {

  entry: {
    imageAsset: [ 'babel-polyfill', './web/imageAsset' ],
    // fileAsset: './web/fileAsset',
    // codeAsset: './web/codeAsset',
  },

  output: {
    filename: 'system/[name]-bundle.js',
    path: path.resolve('./app/public'),
    publicPath: '/',
  },

  devtool: 'inline-source-map',

  devServer: {
    contentBase: './app/public',
  },

  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.less$/i,
        use: ExtractLessPlugin.extract([
          'css-loader',
          'less-loader',
        ]),
      },
      {
        test: /\.css$/i,
        use: ExtractLessPlugin.extract([
          'css-loader',
        ]),
      },
    ],
  },

  plugins: [
    ExtractLessPlugin,
  ],
  resolve: {
    extensions: [ '.js', '.jsx' ],
  },

  mode: 'development',
};

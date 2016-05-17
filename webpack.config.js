'use strict';

const path = require('path');

module.exports = {
  entry: {
    app: ['./src/main'],
    vendor: [
      'es5-shim',
      'es6-shim'
    ]
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
    sourceMapFilename: '[name].js.map'
  },

  devtool: 'source-map',

  module: {
    preLoaders: [
      {
        test: /\.ts$/,
        loaders: ['tslint']
      }
    ],
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript']
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.ts']
  }
};

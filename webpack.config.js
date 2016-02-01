'use strict';

var webpack = require('webpack');
var path = require('path');

var config = {
  devtool: 'source-map',
  entry: {
    app: ['./app/main.js']
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json'},
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
      { test: /\.less$/, loader: 'style!css!less'}
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public/',
    filename: 'bundle.js',
  },
};

module.exports = config;

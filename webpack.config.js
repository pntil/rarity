'use strict';

var autoprefixer = require('autoprefixer');
var path = require('path');
var webpack = require('webpack');

var config = {
  entry: {
    app: ['./app/main.js']
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json'},
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
      { test: /\.less$/, loader: 'style!css!postcss!less'}
    ]
  },
  output: {
    path: path.resolve(__dirname, 'example'),
    publicPath: '/example/',
    filename: 'bundle.js',
  },
  postcss: [
    autoprefixer({
      browsers: ['> 1%', 'ie 11']
    })
  ]
};

module.exports = config;

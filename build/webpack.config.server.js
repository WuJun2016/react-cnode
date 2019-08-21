const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base')

module.exports = webpackMerge( baseConfig, {
  mode: 'development',
  target: 'node', // 表示在nodejs环境执行
  entry: path.join(__dirname, '../client/server-entry.js'),
  output: {
    filename: 'server-entry.js',  // 需要在nodejs里面import这个文件
    libraryTarget: 'commonjs2' // 打包出来的js所以的模块的方案
  },
  devServer: {
    port: 3000,
    publicPath: '../dist/'
  }
})
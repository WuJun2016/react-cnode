const webpack = require('webpack');
const path = require('path');

module.exports = {
  target: 'node', // 表示在nodejs环境执行
  entry: path.join(__dirname, '../client/server-entry.js'),
  output: {
    filename: 'server-entry.js',  // 需要在nodejs里面import这个文件
    path: path.join(__dirname, '../dist'),
    publicPath: '/public/', // 加在引用静态资源的前面的
    libraryTarget: 'commonjs2' // 打包出来的js所以的模块的方案
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(jsx|js)/,
        use: ['eslint-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(jsx|js)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port: 3000,
    publicPath: '../dist/'
  }
}
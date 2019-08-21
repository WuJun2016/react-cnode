const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base')
const isDev = process.env.NODE_ENV == 'development';

const config = webpackMerge(baseConfig, {
  mode: 'development',
  entry: {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, '../client/app.js')
    ]
  },
  output: {
    filename: '[name].[hash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, '../dist/index.html'),
      template: path.join(__dirname,'template.html')
    })
  ]
})

if(isDev) {
  config.devServer = {
    host: '0.0.0.0',
    port: 3000,
    contentBase: path.join(__dirname, '../dist'),
    publicPath: '/public/',
    hot: true,
    overlay: {
      errors: true
    },
    historyApiFallback: { // 要把本地的dist删除
      index: '/public/index.html'
    }
  }
}

module.exports = config;
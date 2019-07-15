const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV == 'development';

const config = {
  mode: 'development',
  entry: {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, '../client/app.js')
    ]
  },
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/public/' // 加在引用静态资源的前面的
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
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, '../dist/index.html'),
      template: path.join(__dirname,'template.html')
    })
  ]
}

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
const path = require('path')
module.exports = {
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/public/' // 加在引用静态资源的前面的
  },
  resolve: {
    extensions: ['.js', '.jsx']
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
  }
}

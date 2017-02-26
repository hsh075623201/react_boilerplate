var webpack = require('webpack');
var path = require('path'); //引入node的path库
var HtmlWebpackPlugin = require('html-webpack-plugin')


var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var config = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:3000',
    './app/index.js'
  ], //入口文件
  output: {
    path: path.resolve(__dirname, 'dist'), // 指定编译后的代码位置为 dist/bundle.js
    filename: '/bundle.js',
    // 添加 chunkFilename
    chunkFilename: '[name].[chunkhash:5].chunk.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      // 为webpack指定loaders
      //{ test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ }   
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      }, {
        test: /\.less$/,
        loaders: ['style', 'css', 'less'],
        include: path.resolve(__dirname, 'app')
      }, {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Biolerplate by hsh',
      template: path.resolve(__dirname, 'templates/index.ejs'),
      inject: 'body'
    }),
    new UglifyJsPlugin({
      minimize: true
    })

  ]
}

module.exports = config;
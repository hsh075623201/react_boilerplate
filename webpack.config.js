var webpack = require('webpack');
var path = require('path'); //引入node的path库
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')


var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var config = {
  entry: {
    data: [
      'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
      'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
      './app/index.js'
    ]

  }, //入口文件
  output: {
    path: path.resolve(__dirname, 'dist'), // 指定编译后的代码位置为 dist/bundle.js
    filename: 'bundle.js',
    publicPath: '/',

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
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
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
    }),
    new ExtractTextPlugin("css/[name]_[hash:8].css"),
    new webpack.HotModuleReplacementPlugin(),
    /*new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })*/


  ]
}

module.exports = config;
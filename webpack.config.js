var webpack = require('webpack');
var path = require('path'); //引入node的path库
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')


var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var config = {
  entry: {
    data: [
      'react-hot-loader/patch',
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
  devServer: {
    host: "0.0.0.0",
    port: 3000,
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    //color: true,
    //progress: true
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
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        // Limiting the size of the woff fonts breaks font-awesome ONLY for the extract text plugin
        // loader: "url?limit=10000"
        loader: "url-loader"
      }, {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        loader: 'file-loader'
      }, {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          // css modules

          use: "css-loader?modules&localIdentName=[name]_[local]-[hash:base64:5]"
        })
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          // css modules
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
      sourceMap: true
    }),
    new webpack.LoaderOptionsPlugin({
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
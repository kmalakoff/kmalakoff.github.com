var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './client/index.js'
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: "[name].js",
    chunkFilename: "[id].js"
  },
  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['web_modules', 'node_modules']
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  module: {
    loaders: [
      {test: /\.js?$/, loader: 'babel'},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('css-loader')},
      {test: /\.jpg$/, loader: 'file-loader'}
    ]
  },

  plugins: [
    new webpack.IgnorePlugin(/\.DS_Store/),
    new ExtractTextPlugin('[name].css', {allChunks: true})
  ].concat(process.env.STATIC ? new webpack.optimize.UglifyJsPlugin({minimize: true}) : [])
}

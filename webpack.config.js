var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['web_modules', 'node_modules']
  },
  module: {
    loaders: [
      {test: /\.js?$/, exclude: /(node_modules)/, loader: 'babel?optional[]=runtime&stage=0'},
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff"},
      {test: /\.(ttf|eot|svg|jpg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"}
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/\.DS_Store/),
  ].concat(process.env.STATIC ? new webpack.optimize.UglifyJsPlugin({minimize: true}) : [])
}

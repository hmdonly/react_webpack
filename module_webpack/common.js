var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

function buildConfig(configDirs) {
  return {
    entry: configDirs.APP_DIR + '/index.js',
    output: {
      path: configDirs.BUILD_DIR,
      filename: 'bundle.js',
      publicPath: '/'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules :[
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        },
        {
          test: /\.jsx$/,
          use : 'babel-loader'
        }
      ]
    },
    devServer: {
      historyApiFallback: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "src", "index.html"),
      }),
      new webpack.optimize.UglifyJsPlugin({ minimize: true })
    ]
  };
};

module.exports = buildConfig;
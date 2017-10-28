const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = {
  // devtool: 'cheap-module-source-map',
  /* 入口 */
  entry: {
    app: ['babel-polyfill', path.join(__dirname, 'src/app.js')],
    vendor: ['react', 'react-router-dom', 'react-dom']
  },

  /* 输出到dist文件夹，输出文件名字为bundle.js */
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      containers: path.join(__dirname, 'src/containers'),
      components: path.join(__dirname, 'src/components'),
      router: path.join(__dirname, 'src/router'),
      actions: path.join(__dirname, 'src/redux/actions'),
      reducers: path.join(__dirname, 'src/redux/reducers')
    },
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader', 'eslint-loader'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.html$/,
      use: [{
        loader: 'html-loader'
      }]

    }, {
      test: /\.(png|jpe?g|gif|svg)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html')
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    })
  ]
};


module.exports = commonConfig;

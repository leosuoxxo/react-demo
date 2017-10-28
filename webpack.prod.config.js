const commonConfig = require('./webpack.config.js');

const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const prodConfig = {
  output: {
    publicPath: '/',
    path: path.join(__dirname, './dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          }
        ]
      })
    }, {
      test: /\.(scss|sass)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            minimize: true
          }
        }, 'postcss-loader', 'sass-loader']
      })
    }]
  },
  plugins: [
    new UglifyJSPlugin(),
    new ExtractTextPlugin({
      filename: '[name].[contenthash:5].css',
      allChunks: true
    }),
    new CleanWebpackPlugin(['dist/*.*']),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
};

module.exports = merge(commonConfig, prodConfig);

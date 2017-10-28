const commonConfig = require('./webpack.config.js');

const merge = require('webpack-merge');
const path = require('path');

const devConfig = {
  entry: {
    app: [
      'babel-polyfill',
      'react-hot-loader/patch',
      path.join(__dirname, 'src/app.js')
    ]
  },
  output: {
    filename: '[name].[hash].js'
  },
  // resolve: {
  //     alias: {
  //         pages: path.join(__dirname, 'src/pages'),
  //         component: path.join(__dirname, 'src/component'),
  //         router: path.join(__dirname, 'src/router'),
  //         actions: path.join(__dirname, 'src/redux/actions'),
  //         reducers: path.join(__dirname, 'src/redux/reducers')
  //     }
  // },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader']
    }, {
      test: /\.(scss|sass)$/,
      loader: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
    host: '0.0.0.0'
  }
};

module.exports = merge({
  customizeArray(a, b, key) {
    /* entry.app不合并，全替换 */
    if (key === 'entry.app') {
      return b;
    }
    return undefined;
  }
})(commonConfig, devConfig);

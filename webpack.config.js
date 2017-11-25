import webpack from 'webpack'
import merge from 'webpack-merge'
import config from './config'
import {
  development,
  production
} from './config/webpackEnv'

const envConfig = config.env == 'development' ? development : production

export default merge({}, envConfig, {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|svg)$/,
        exclude: /node_modules/,
        loaders: 'url-loader'
      }
    ]
  }
})
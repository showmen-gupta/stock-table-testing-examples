/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = function(env) {
  const dotenvPath = path.resolve(__dirname, `./.env.${env.environment}`);
  var baseConfig = {
    entry: './src/index.js',
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          options: { presets: ['@babel/env'] }
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader'
          ]
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          loader: 'file-loader',
          options: {
            emitFile: true,
          }
        },
        { test: /\.tsx?$/, loader: 'ts-loader' }
      ]
    },
    resolve: { 
      extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    },
    output: {
      path: path.resolve(__dirname, 'public/'),
      filename: 'bundle.js'
    },
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      }),
      new Dotenv({
        path: dotenvPath,
        systemvars: true
      }),
    ]
  };
  
  switch (env.environment) {
  case 'dev':
    baseConfig.mode = 'development';
    break;
  case 'sys':
    baseConfig.mode = 'development';
    break;
  case 'acc':
    baseConfig.mode = 'development';
    break;
  case 'prod':
    baseConfig.mode = 'production';
    break;
  case 'local':
    // local
    baseConfig.mode = 'development';
    baseConfig.devServer = {
      host: 'localhost',
      historyApiFallback: true, // respond to 404s with index.html
      hot: true,
      open: true,
      port: 3010,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
    };
    break;
  default:
    break;
  }
  return baseConfig;
};
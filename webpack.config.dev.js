const path = require('path');
const webpack = require('webpack');

// webpack.config.js
module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, 'client/index')
  ],
  target: 'web',
  output: {
    path: path.join(__dirname,'./dist/'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
        { test: /\.(css|scss)$/, loaders: ['style-loader', 'css-loader'] },
        { test: /\.(js|jsx)$/, include: path.join(__dirname, 'client'),loader: 'babel-loader', query: { presets: ['es2015', 'react'] } },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
        { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
        {
          test: /\.(jpe?g|png|gif|svg|ico)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                query: {
                  name:'assets/[name].[ext]'
                }
              }
            },
            {
              loader: 'image-webpack-loader',
              options: {
                query: {
                  mozjpeg: {
                    progressive: true,
                  },
                  gifsicle: {
                    interlaced: true,
                  },
                  optipng: {
                    optimizationLevel: 7,
                  }
                }
              }
            }
          ]
        }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'client')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  }
};

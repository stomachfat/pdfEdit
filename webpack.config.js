var path = require('path');
var webpack = require('webpack');
module.exports = {
 entry: './src/index.js',
 output: {
  path: path.join(__dirname, 'public'),
  filename: 'bundle.js'
 },
 module: {
  loaders: [
  // {
  //   test: /\.(js|jsx)$/,
  //   include: path.join(__dirname, 'src'),
  //   loader: require.resolve('babel-loader'),
  //   options: {
  //     // This is a feature of `babel-loader` for Webpack (not Babel itself).
  //     // It enables caching results in ./node_modules/.cache/babel-loader/
  //     // directory for faster rebuilds.
  //     cacheDirectory: true,
  //     plugins: ['react-hot-loader/babel'],
  //   },
  // },
  {
    test: /.jsx?$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    query: {
      presets: ['es2015', 'react']
    }
  },
  {
    test: /\.css$/,
    loader: "style-loader!css-loader"
  }
  ]
 }
}

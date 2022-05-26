const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'development',
  resolve: {
    roots: ['src/js', 'node_modules'],
    extensions: ['', '.js', '.json'],
  },
  entry: './src/js/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist',
    filename: 'osmdrawer.min.js',
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname),
    },
    compress: true,
    port: 8080,
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }],
      },
      {
        test: /\.css/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.json/,
        loader: 'json',
      },
      {
        test: /\.svg/,
        type: 'asset/inline',
      },
      {
        test: /\.(png|jpg)$/,
        type: 'asset/inline',
      },
    ],
  },
}

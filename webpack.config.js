const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx', // entry point
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    }, {
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      loader: "ts-loader"
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({template: "./src/index.html"})
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    open: true,
    compress: true,
    hot: true,
    port: 3000
  }
}

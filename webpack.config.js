const { resolve, join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    path: resolve(__dirname, 'build'),
    filename: 'js/[name]-[fullhash].js',
    clean: true,
    publicPath: '/', // Use this absolute path for deploy on your own host
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React practice',
      template: './public/index.html',
      inject: 'body',
      favicon: './public/images/favicon.ico',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name]-[fullhash].css',
    }),
  ],
  devServer: {
    hot: true,
    port: 3001,
    static: {
      directory: join(__dirname, 'src'),
    },
    historyApiFallback: true,
  },
};

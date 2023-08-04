const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  /* plugins: [
    new HtmlWebpackPlugin({
      title: 'Bair Tsydendambaev',
    }),
  ], */
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    // clean: true,
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true,
    open: true,
    host: 'localhost',
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  require('autoprefixer'),
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
};

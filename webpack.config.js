const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const index = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.png$/,
        type: 'asset/resource',
        generator: {
          outputPath: 'img/',
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
};

const task1 = {
  entry: './src/1-task/index.js',
  output: {
    path: path.resolve(__dirname, 'dist', '1-task'),
    filename: 'index.js',
    assetModuleFilename: 'img/[name][ext]',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/1-task/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.png/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
};

// const task3 = {
//   entry: './src/3-task/index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist', '3-task'),
//     filename: 'index.js',
//   },
//
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './src/3-task/index.html',
//       filename: 'index.html',
//     }),
//     new MiniCssExtractPlugin({
//       filename: 'index.css',
//     }),
//   ],
//
//   module: {
//     rules: [
//       {
//         test: /\.(png|jpe?g|gif|svg)/,
//         type: 'asset/resource',
//       },
//       {
//         test: /\.css$/i,
//         use: [MiniCssExtractPlugin.loader, 'css-loader'],
//       },
//     ],
//   },
// };

module.exports = [index, task1];

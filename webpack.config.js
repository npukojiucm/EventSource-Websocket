const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// module.exports = {
//   entry: './index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: '[name].js',
//   },

//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './index.html',
//     }),
//     new MiniCssExtractPlugin({
//       filename: '[name].css',
//     }),
//   ],

//   module: {
//     rules: [
//       {
//         test: /\.png/,
//         type: 'asset/resource',
//       },
//       {
//         test: /\.css$/i,
//         use: [MiniCssExtractPlugin.loader, 'css-loader'],
//       },
//     ],
//   },
// };

// const index = {
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'index.js',
//   },
//
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './src/index.html',
//     }),
//     new MiniCssExtractPlugin({
//       filename: 'index.css',
//     }),
//   ],
//
//   module: {
//     rules: [
//       {
//         test: /\.png/,
//         type: 'asset/resource',
//       },
//       {
//         test: /\.css$/i,
//         use: [MiniCssExtractPlugin.loader, 'css-loader'],
//       },
//     ],
//   },
// };
//
// const task1 = {
//   entry: './src/1-task/index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist', '1-task'),
//     filename: 'index.js',
//   },
//
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './src/1-task/index.html',
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
//         test: /\.png/,
//         type: 'asset/resource',
//       },
//       {
//         test: /\.css$/i,
//         use: [MiniCssExtractPlugin.loader, 'css-loader'],
//       },
//     ],
//   },
// };
//
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
//
// module.exports = [index, task1,];

console.log(__dirname)

// module.exports = {
//   mode: 'development',
//   entry: path.join(__dirname, 'src/index.js'),
//   output: {
//     filename: 'index.js',
//     path: path.resolve(__dirname, '../public'),
//     publicPath: '/',
//   },
//   devtool: 'source-map',
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.join(__dirname, 'src/index.html'),
//     }),
//   ],
//   resolve: {
//     modules: [
//       path.join(__dirname, 'node_modules')
//     ]
//   }
// };

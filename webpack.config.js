/*
 * @Author: Qvanjian
 * @Date: 2021-08-14 11:53:46
 * @LastEditTime: 2021-08-15 18:34:08
 * @LastEditors: Qvanjian
 * @Description: Basic webpack config for both development and production
 * @FilePath: \vue3-webpack-template\webpack.config.js
 */
"use strict";

const { resolve } = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(gif|jpg|jpeg|png|ico|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 40000,
              name: "[name].[hash:8].[ext]",
              outputPath: resolve(__dirname, "dist/pics"),
            },
          },
        ],        
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'file-loader'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 40000,
          name: 'media/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: file => (!/\.vue\.js/.test(file)),
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(), 
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),],
};

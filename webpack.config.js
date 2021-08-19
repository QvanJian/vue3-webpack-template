/*
 * @Author: Qvanjian
 * @Date: 2021-08-14 11:53:46
 * @LastEditTime: 2021-08-19 13:16:31
 * @LastEditors: Qvanjian
 * @Description: Basic webpack config for both development and production
 * @FilePath: \vue3-webpack-template\webpack.config.js
 */
"use strict";

const webpack = require("webpack");
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
        type: "asset/resource",
        generator: {
          filename: "images/[name].[hash:8].[ext]",
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        type: "asset/resource",
        generator: {
          filename: "font/[name].[hash:8].[ext]",
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: "asset/resource",
        generator: {
          filename: "media/[name].[hash:8].[ext]",
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: (file) => !/\.vue\.js/.test(file),
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title:"Vue 3 with webpack 5 template",
      template: "./src/index.html",
      filename: "index.html",
    }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: JSON.stringify(true),
      __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
    }),
  ],
};

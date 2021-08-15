/*
 * @Author: Qvanjian
 * @Date: 2021-08-14 16:25:21
 * @LastEditTime: 2021-08-15 18:52:53
 * @LastEditors: Qvanjian
 * @Description: Webpack config for development
 * @FilePath: \vue3-webpack-template\webpack.config.prod.js
 */
"use strict";

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");
const base = require("./webpack.config.js");

module.exports = merge(base, {
  mode: "production",
  output: {
    filename: "js/[name].[contenthash:8].js",
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.(s[ac]ss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sassOptions: {
                fiber: false,
                outputStyle: "compressed",
              },
            },
          },
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[id].css",
    }),
  ],
  optimization: {
    // 配置代码分割
    splitChunks: {
      // 要分割哪些模块：all（推荐）, async(默认，只分隔异步代码), and initial
      chunks: "all",
      maxSize: 50000,
    },
  },
});

/*
 * @Author: Qvanjian
 * @Date: 2021-08-14 11:53:46
 * @LastEditTime: 2021-08-19 16:49:51
 * @LastEditors: Qvanjian
 * @Description: Basic webpack config for both development and production
 * @FilePath: \vue3-webpack-template\build\webpack.config.js
 */
"use strict";

const webpack = require("webpack");
const { resolve } = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const util = require("./utils");

const devServerOptions = {
  port: 9528,
  host: util.myHost(),
  index: "index.html",
  compress: true,
  hot: true,
  open: true,
  overlay: {
    warnings: true,
    errors: true,
  },
  historyApiFallback: true, // auto to publicPath/index.html when 404 returned

  //proxy: {
  //  "/api": {
  //    target: "https://api-m.mtime.cn",
  //    changeOrigin: true,
  //    pathRewrite: {
  //      "^/api/old-path": "/api/new-path", // rewrite path
  //      "^/api/remove/path": "/path", // remove base path
  //    },
  //  },
  //},

  //bypass: function (req, res, proxyOptions) {
  //  if (req.headers.accept.indexOf("html") !== -1) {
  //    console.log("Skipping proxy for browser request.");
  //    return "/index.html";
  //  }
  //},
};

const prodOpt = {
  // Code split
  splitChunks: {
    chunks: "all",
    maxSize: 100000,
  },
  minimizer: [`...`, new CssMinimizerPlugin()],
};

module.exports = (env) => {
  const devMode = env !== "production";
  return {
    entry: "./src/index.js",
    mode: devMode ? "development" : "production",
    output: {
      path: resolve(__dirname, "dist"),
      filename: devMode ? "js/[name].js" : "js/[name].[contenthash:8].js",
    },
    devtool: devMode
      ? "eval-cheap-module-source-map"
      : "cheap-module-source-map",

    devServer: devMode ? devServerOptions : {},
    module: {
      rules: [
        {
          test: /\.(s[ac]ss|css)$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
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
          ],
        },
        {
          test: /\.(gif|jpg|jpeg|png|ico|svg)$/,
          type: "asset/resource",
          generator: {
            filename: devMode
              ? "images/[name].[ext]"
              : "images/[name].[contenthash:8].[ext]",
          },
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          type: "asset/resource",
          generator: {
            filename: devMode
              ? "font/[name].[ext]"
              : "font/[name].[contenthash:8].[ext]",
          },
        },
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          type: "asset/resource",
          generator: {
            filename: devMode
              ? "media/[name].[ext]"
              : "media/[name].[contenthash:8].[ext]",
          },
        },
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
        {
          test: /\.js$/,
          loader: "babel-loader",
        },
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        title: "Vue 3 with webpack 5 template",
        template: "./src/index.html",
        filename: "index.html",
      }),
      new CleanWebpackPlugin(),
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: JSON.stringify(true),
        __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
      }),
      new MiniCssExtractPlugin({
        filename: devMode ? "css/[name].css" : "css/[name].[contenthash:8].css",
        chunkFilename: devMode
          ? "css/[id].css"
          : "css/[id].[contenthash:8].css",
      }),
    ],
    optimization: devMode ? {} : prodOpt,
  };
};

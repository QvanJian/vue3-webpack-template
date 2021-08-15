/*
 * @Author: Qvanjian
 * @Date: 2021-08-14 17:24:55
 * @LastEditTime: 2021-08-15 20:12:42
 * @LastEditors: Qvanjian
 * @Description: webpack config for development
 * @FilePath: \vue3-webpack-template\webpack.config.dev.js
 */
"use strict";

const { merge } = require("webpack-merge");
const base = require("./webpack.config.js");
const os = require('os');

module.exports = merge(base, {
  mode: "development",
  output: {
    filename: "[name].js",
  },
  devServer: {
    port: 9528,
    host: myHost(),
    index: "index.html",
    compress: true,
    hot: true,
    open: true,
    overlay: {
      warnings: true,
      errors: true,
    },
    //historyApiFallback: true, // auto to publicPath/index.html when 404 returned
    //historyApiFallback: {
    //  rewrites: [
    //    { from: /^\/$/, to: '/views/landing.html' },
    //  ]
    //}

    //开发阶段定义访问跨域
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

    //拦截器
    //bypass: function (req, res, proxyOptions) {
    //  if (req.headers.accept.indexOf("html") !== -1) {
    //    console.log("Skipping proxy for browser request.");
    //    return "/index.html";
    //  }
    //},
  },
  devtool: "eval-cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.(s[ac]ss|css)$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sassOptions: {
                fiber: false,
              },
            },
          },
          "postcss-loader",
        ],
      },
    ],
  },
});

function myHost() {
    var interfaces = os.networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
}

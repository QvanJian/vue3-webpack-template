/*
 * @Author: Qvanjian
 * @Date: 2021-08-14 13:51:43
 * @LastEditTime: 2021-08-15 16:28:01
 * @LastEditors: Qvanjian
 * @Description: Config for postcss
 * @FilePath: \vue3-webpack-template\postcss.config.js
 */
"use strict";

module.exports = {
  plugins: [
    //自动前缀
    require("autoprefixer"),
    //添加svg的css语法修改
    require("postcss-inline-svg"),
    //删除冗余svg代码
    require("postcss-svgo"),
  ],
};

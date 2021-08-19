/*
 * @Author: Qvanjian
 * @Date: 2021-08-19 13:50:34
 * @LastEditTime: 2021-08-19 13:52:29
 * @LastEditors: Qvanjian
 * @Description: 
 * @FilePath: \vue3-webpack-template\build\utils.js
 */
const os = require('os');

exports.myHost = function() {
  var interfaces = os.networkInterfaces();
  for (var devName in interfaces) {
    var iface = interfaces[devName];
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i];
      if (
        alias.family === "IPv4" &&
        alias.address !== "127.0.0.1" &&
        !alias.internal
      ) {
        return alias.address;
      }
    }
  }
};

/*
 * @Author: Qvanjian
 * @Date: 2021-08-14 11:52:50
 * @LastEditTime: 2021-08-15 19:02:25
 * @LastEditors: Qvanjian
 * @Description: Start a Vue app and inject into the index.html
 * @FilePath: \vue3-webpack-template\src\index.js
 */
//import "core-js";
import "normalize.css";
//import "regenerator-runtime/runtime";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//router.beforeEach((to, from, next) => {
//  if (
//    to.name !== "Login" &&
//    to.name !== "Welcome" &&
//    !store.state.isAuthenticated
//  )
//    next({ name: "Welcome" });
//  else next();
//});

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");

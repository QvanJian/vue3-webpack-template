/*
 * @Author: Qvanjian
 * @Date: 2021-08-15 14:26:05
 * @LastEditTime: 2021-08-15 19:03:32
 * @LastEditors: Qvanjian
 * @Description: Router config for vue app
 * @FilePath: \vue3-webpack-template\src\router\index.js
 */
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  /*{
    path: "/union",
    name: "Union",
    //Lazy load
    component: () => import("../views/Union.vue"),
  },
  {
    path: "/members",
    name: "Member",
    component: () => import("../views/Member.vue"),
    children: [
      {
        path: "man",
        name: "man",
        component: () => import("../components/Chairman.vue"),
      },
    ],
  },*/
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
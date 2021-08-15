<!--
 * @Author: Qvanjian
 * @Date: 2021-08-14 11:52:20
 * @LastEditTime: 2021-08-15 19:11:13
 * @LastEditors: Qvanjian
 * @Description: Layout of the app
 * @FilePath: \vue3-webpack-template\src\App.vue
-->
<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg: "Welcome to your app!",
    };
  },
};
</script>

<style lang="scss">
div {
  text-align: center;
}
</style>

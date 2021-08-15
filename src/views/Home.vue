<template>
  <div>
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: function () {
    return {
      msg: "Vue 3 with webpack template",
    };
  },
};
</script>
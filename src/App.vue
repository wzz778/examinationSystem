<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import a from "./myAxios/index";
export default {
  name: "App",
  // components: {
  //   HelloWorld,
  // },
  // mounted() {
  //   console.log(a);
  //   a.getUserInfo()
  //     .then((result) => {
  //       console.log("结果", result);
  //     })
  //     .catch((err) => {
  //       console.log("失败", err);
  //     });
  // },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body{
    outline: none !important;
}
a{
    text-decoration: none;
}
</style>

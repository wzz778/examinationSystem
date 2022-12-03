<template>
    <div id="top">
    <h1 @click="jump">我是一个考试系统</h1>
  </div>
</template>

<script>
export default {
name:'TestLogin',
methods: {
  jump(){
  this.$router.push("/admin")
  }
},
}
</script>

<style lang="less" scoped>

</style>
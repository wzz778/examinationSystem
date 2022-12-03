<template>
  <div id="adminindex">
    <h1>这是学科列表内容</h1>
    <button @click="storejia1">点我加他</button>
  </div>
</template>
<script>
// firstajax()
export default {
    name:'AdminIndex',
    methods:{
      storejia1(){
        alert('dasdasd')
      }
    }
}
</script>
<style lang="less" scoped>
    #adminindex{
        width: 100%;
        height: 300px;
        background-color:#3BCA55;
    }
</style>
<template>
  <div  id="adminindex" >
    <h1>这是主页内容</h1>
    <button @click="storejia1">点我加他</button>
  </div>
</template>
<script>
import {getAllSubject} from '@/myAxios/admin/wzzAxios'
// firstajax()
export default {
    name:'AdminIndex',
    methods:{
      async storejia1(){
        let data={
          beginIndex:1,
          size:10
        }
        console.log(await getAllSubject(data));
        // await firstajax()
      }
    }
}
</script>
<style lang="less" scoped>
    #adminindex{
        width: 100%;
        height: 300px;
        background-color: #f8f8f8;
    }
</style>
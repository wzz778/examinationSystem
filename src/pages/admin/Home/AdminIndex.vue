<template>
  <div  id="adminindex" >
    <div class="panelbox">
      <PanelCard style="width:20%" icon="el-icon-s-custom" title="试卷总数" :number="18"/>
      <PanelCard style="width:20%" icon="el-icon-s-custom" title="试卷总数" :number="18"/>
      <PanelCard style="width:20%" icon="el-icon-s-custom" title="试卷总数" :number="18"/>
      <PanelCard style="width:20%" icon="el-icon-s-custom" title="试卷总数" :number="18"/>
    </div>
    <h1>这是主页内容</h1>
    <button @click="storejia1">点我加他</button>
  </div>
</template>
<script>
import {getAllSubject} from '@/myAxios/admin/wzzAxios'
import PanelCard from '@/components/admin/PanelCard'
// firstajax()
export default {
    name:'AdminIndex',
    components:{
      PanelCard
    },
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
        min-height: 500px;
        background-color: #f8f8f8;
        
    }
</style>
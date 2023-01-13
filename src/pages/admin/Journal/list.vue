<template>
  <div id="adminindex">
    用户账号：
    <el-input style="width:200px;" v-model="searchform.username"></el-input>
    <el-button @click="find" type="primary" style="margin:0px 10px;">查询</el-button>
    <el-table
        :data="tableData"
        :v-loading="true"
        border
        style="width: 100%;margin:10px 0;">
        <el-table-column
        fixed
        prop="id"
        label="ID"
        empty-text
       >    
        </el-table-column>
        <el-table-column
        prop="userId"
        label="用户id"
        > 
        </el-table-column>
        <el-table-column
        prop="log"
        label="动态"
        >
        </el-table-column>
        <el-table-column
        prop="createTime"
        label="时间"
        >
        </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="searchform.nodePage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="searchform.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="alltotal">
    </el-pagination>
  </div>
</template>
<script>
import {Tag} from "element-ui";
import {getLogs} from '@/myAxios/admin/wzzAxios'
export default {
  name:'JournalList',
  components: {
     [Tag.name]: Tag,
  },
    data() {
      const item = {
        id: '1',
        subjectName: '语文',
        levelName: '年级',
      };
      return {
        tableData:Array(0).fill(item),
        alltotal:100,
        searchform:{
          username:"",
          nodePage: 1,
          pageSize:5,
        }
      }
    },
    methods:{
      handleSizeChange(val) {
        this.searchform.pageSize=val;
        this.chagepage()
      },
      handleCurrentChange(val) {
        this.searchform.nodePage=val;
        this.chagepage()
      },
      find() {
        this.searchform.nodePage=1;
        this.chagepage()
      },
      async chagepage() {
          let data= await getLogs(this.searchform)
          console.log(data);
          if(data.status==200){
            this.alltotal=data.data.total;
            this.tableData=data.data.records;
          }else{
            this.$message.error('获取失败');
          }
      },
    },
    async mounted(){
      this.chagepage()
    },
}
</script>
<style lang="less" scoped>
    #adminindex{
        width: 100%;
        min-height: 500px;
        padding:20px 10px;
        background-color: #f8f8f8;
    }
</style>
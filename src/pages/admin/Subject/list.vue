<template>
  <div id="adminindex">
    年级：
    <el-select v-model="region" placeholder="请选择活动区域">
      <el-option  v-for="p of $store.state.admin.allgrade" :key="p.index" :label="p" :value="p"></el-option>
    </el-select>
    <el-button @click="find">查询</el-button>
    <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
        fixed
        prop="id"
        label="ID"
       >    
        </el-table-column>
        <el-table-column
        prop="subject"
        label="学科"
        >
        </el-table-column>
        <el-table-column
        prop="levelName"
        label="年级"
        >
        </el-table-column>
        <el-table-column
        label="操作"
        >
        <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="primary" size="small">查看</el-button>
            <el-button type="danger" size="small">删除</el-button>
        </template>
        </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="alltotal">
    </el-pagination>
    <!-- <div>{{tableDatas}}</div> -->
  </div>
</template>
<script>
import { Select, Option } from "element-ui";
import {getAllSubject} from '@/myAxios/admin/wzzAxios'
export default {
    name:'SubjectList',
  components: {
    [Select.name]: Select,
    [Option.name]: Option,
  },
    data() {
        const item = {
          id: '1',
          subject: '语文',
          levelName: '年级',
        };
      return {
        currentPage: 1,
        tableData:Array(5).fill(item),
        region:"",
        pagesize:5,
        alltotal:100
      }
    },
    methods:{
      handleClick(row) {
        console.log(row);
      },
      handleSizeChange(val) {
        this.pagesize=val;
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage=val;
        console.log(`当前页: ${val}`);
      },
      find() {
        console.log(this.region);
      },
    },
    async mounted(){
      console.log(await getAllSubject({beginIndex:this.currentPage,size:this.pagesize}));
    },
    computed:{
        // tableDatas() {
        //   console.log(getAllSubject({beginIndex:this.currentPage,size:this.pagesize}));
        //   // await getAllSubject({beginIndex:this.currentPage,size:this.pagesize})
        //     // .then(data=>{
        //     //   console.log(data);
        //     //   return data.data.records;
        //     // })
        //     // .catch(err=>{
        //     //   })
        //     return this.tableData;
        // },
  },
}
</script>
<style lang="less" scoped>
    #adminindex{
        width: 100%;
        min-height: 500px;
        background-color: #f8f8f8;
    }
</style>
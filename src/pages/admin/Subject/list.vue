<template>
  <div id="adminindex">
    年级：
    <el-select v-model="region" placeholder="请选择活动区域">
      <el-option  v-for="p of $store.state.admin.allgrade" :key="p.index" :label="p" :value="p"></el-option>
    </el-select>
    <el-button @click="find" type="primary" style="margin:0px 10px;">查询</el-button>
    <el-table
        :data="tableData"
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
        prop="subjectName"
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
          subjectName: '语文',
          levelName: '年级',
        };
      return {
        currentPage: 1,
        tableData:Array(0).fill(item),
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
        this.chagepage()
      },
      handleCurrentChange(val) {
        this.currentPage=val;
        this.chagepage()
      },
      find() {
        console.log(this.region);
      },
      async chagepage() {
        let data= await getAllSubject({beginIndex:this.currentPage,size:this.pagesize})
        if(data.status==200){
          this.alltotal=data.data.total;
          this.tableData=data.data.records;
        }
      },
    },
    async mounted(){
      this.chagepage()
    },
    computed:{
        // tableDatas() {
        //   let that=this;
        //   let axios;
        //   (async function(){
        //     axios= await getAllSubject({beginIndex:that.currentPage,size:that.pagesize})
        //     if (axios.status==200) {
        //       return 111;
        //     }
        //   })()
        //     console.log(axios);
        //   // await getAllSubject({beginIndex:this.currentPage,size:this.pagesize})
        //     // .then(data=>{
        //     //   console.log(data);
        //     //   return data.data.records;
        //     // })
        //     // .catch(err=>{
        //     //   })
        //     return axios;
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
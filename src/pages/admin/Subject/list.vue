<template>
  <div id="adminindex">
    年级：
    <el-select v-model="level" placeholder="请选择活动区域">
      <el-option  v-for="p of $store.state.admin.allgrade" :key="p.index" :label="p" :value="p"></el-option>
    </el-select>
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
            <el-button @click="editClick(scope.row)" type="primary" size="small">修改</el-button>
            <el-button @click="deleteClick(scope.row)" type="danger" size="small">删除</el-button>
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
import {getAllSubject,searchSubject,deleteSubject} from '@/myAxios/admin/wzzAxios'
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
        level:"",
        pagesize:5,
        alltotal:100
      }
    },
    methods:{
      editClick(row) {
        console.log(row);
        sessionStorage.setItem("formmessage",JSON.stringify(row))
        this.$router.replace({
            path:"edit",
                query:{
                    id:row.id,
                }
        })
      },
      deleteClick(row) {
         this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          return deleteSubject({ids:row.id});
        })
        .then((response) => {
          console.log(response);
          if(response.status==200){
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          }else{
            this.$message.error('删除失败');
          }
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
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
        this.currentPage=1;
        this.chagepage()
      },
      async chagepage() {
        if(this.level==""){
          let data= await getAllSubject({beginIndex:this.currentPage,size:this.pagesize})
          if(data.status==200){
            this.alltotal=data.data.total;
            this.tableData=data.data.records;
          }else{
            this.$message.error('获取失败');
          }
        }else{
          let data= await searchSubject({beginIndex:this.currentPage,size:this.pagesize,level:this.level})
          console.log(data);
          if(data.status==200){
            this.alltotal=data.data.total;
            this.tableData=data.data.records;
          }else{
            this.$message.error('获取失败');
          }
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
  // watch:{
  //   level(newvalue){
  //     this.chagepage()
  //     console.log(newvalue);
  //   }
  // }
}
</script>
<style lang="less" scoped>
    #adminindex{
        width: 100%;
        min-height: 500px;
        background-color: #f8f8f8;
    }
</style>
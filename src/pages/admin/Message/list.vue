<template>
  <div id="adminindex">
    年级：
    <el-select v-model="region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
    <el-button @click="find">查询</el-button>
    <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
        fixed
        prop="date"
        label="日期"
        width="150">    
        </el-table-column>
        <el-table-column
        prop="name"
        label="姓名"
        width="120">
        </el-table-column>
        <el-table-column
        prop="province"
        label="省份"
        width="120">
        </el-table-column>
        <el-table-column
        prop="city"
        label="市区"
        width="120">
        </el-table-column>
        <el-table-column
        prop="address"
        label="地址"
        width="300">
        </el-table-column>
        <el-table-column
        prop="zip"
        label="邮编"
        width="120">
        </el-table-column>
        <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
        </template>
        </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="5"
      layout="total, sizes, prev, pager, next, jumper"
      :total="100">
    </el-pagination>
  </div>
</template>
<script>
import { Select, Option } from "element-ui";
export default {
    name:'SubjectList',
  components: {
    [Select.name]: Select,
    [Option.name]: Option,
  },
    data() {
        const item = {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        };
      return {
        currentPage: 1,
        tableData:Array(5).fill(item),
        region:""
      }
    },
    methods:{
      handleClick(row) {
        console.log(row);
      },
        handleSizeChange(val) {
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
}
</script>
<style lang="less" scoped>
    #adminindex{
        width: 100%;
        min-height: 500px;
        background-color:#abdbb4;
    }
</style>
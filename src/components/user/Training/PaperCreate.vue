<template>
  <div class="inforc">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>智能训练</span>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="名称" width="180">
        </el-table-column>
        <el-table-column prop="name" label="学科" width="180">
        </el-table-column>
        <el-table-column prop="address" label="创建时间"> </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "PaperCreate",
  data() {
    return {
              tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
          ]
    };
  },
};
</script>

<style lang="less" scoped>
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.box-card {
  width: 643px;
}
</style>
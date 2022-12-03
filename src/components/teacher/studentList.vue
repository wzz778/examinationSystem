<template>
  <div>
    <myList :tableData="tableData" :allType="allType" :objFn="objFn"> </myList>
    <!-- 分页 -->
    <myPaging
      :nowPage="nowPage"
      :allNums="allNums"
      :pageSize="pageSize"
      :pageChangeFn="pageChangeFn"
      :sizeChangeFn="sizeChangeFn"
    ></myPaging>
  </div>
</template>

<script>
import { Table, TableColumn } from "element-ui";
import myPaging from "./utilComponents/myPaging.vue";
import myList from "./utilComponents/myList.vue";
export default {
  name: "studentList",
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    myPaging,
    myList,
  },
  data() {
    return {
      tableData: [
        {
          id: "1",
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: "2",
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      nowPage: 1,
      pageSize: 10,
      allNums: 100,
      allType: [
        {
          type: "date",
          name: "ID",
        },
        {
          type: "name",
          name: "用户名",
        },
      ],
      objFn: [
        {
          type: "danger",
          fn: this.deleteFn,
          name: "删除",
        },
        {
          type: "danger",
          fn: this.deleteFn,
          name: "编辑",
        },
      ],
    };
  },
  methods: {
    pageChangeFn(val) {
      this.nowPage = val;
      console.log("组件里边的页数", val);
    },
    sizeChangeFn(val) {
      this.pageSize = val;
      console.log("组件里边的条数", val);
    },
    deleteFn(a) {
      console.log("aaaaaaaaaa", a);
      this.$confirm("确定要删除吗?")
        .then(() => {
          console.log("确定");
        })
        .catch(() => {
          this.$message("已取消");
        });
    },
  },
};
</script>

<style scoped>
.el-button {
  padding: 10px;
}
</style>
<template>
  <div>
    <myTop
      :inputInfoObj="myTopConfiguration.inputInfoObj"
      :searchFn="searchFn"
      :seletcInfoObjOne="myTopConfiguration.seletcInfoObjOne"
      :seletcInfoObjTwo="myTopConfiguration.seletcInfoObjTwo"
      :buttonInfo="myTopConfiguration.buttonInfo"
    ></myTop>
    <myList :tableData="myListConfiguration.tableData" :allType="myListConfiguration.allType" :objFn="myListConfiguration.objFn"> </myList>
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
import myTop from "./utilComponents/myTop.vue";
export default {
  name: "studentList",
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    myPaging,
    myList,
    myTop,
  },
  data() {
    return {
      myTopConfiguration: {
        inputInfoObj: {
          showName: "用户名:",
          transferName: "userName",
        },
        seletcInfoObjOne: {
          showName: "班级",
          // 请求的接口类型
          fnType: "getClass",
          // 后端对应的变量名
          transferName: "class",
        },
        buttonInfo: {
          type: false,
        },
      },
      myListConfiguration: {
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
        allType: [
          {
            // dateType表示的是数据
            dateType: "date",
            // 数据显示的名字
            showName: "ID",
          },
          {
            dateType: "name",
            showName: "用户名",
          },
          {
            dateType: "name",
            showName: "真实姓名",
          },
          {
            dateType: "name",
            showName: "学级",
          },
          {
            dateType: "name",
            showName: "性别",
          },
          {
            dateType: "name",
            showName: "手机号",
          },
          {
            dateType: "name",
            showName: "加入时间",
          },
          {
            dateType: "name",
            showName: "班级",
          },
        ],
        objFn: [
          {
            type: "danger",
            callFn: this.deleteFn,
            showInfo: "删除",
          },
        ],
      },
      nowPage: 1,
      pageSize: 10,
      allNums: 100,
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
    searchFn(obj) {
      console.log("查询", obj);
    },
  },
};
</script>

<style scoped>
.el-button {
  padding: 10px;
}
</style>
<template>
  <div>
    <myTop
      :inputInfoObj="myTopConfiguration.inputInfoObj"
      :searchFn="searchFn"
      :seletcInfoObjOne="myTopConfiguration.seletcInfoObjOne"
      :seletcInfoObjTwo="myTopConfiguration.seletcInfoObjTwo"
      :buttonInfo="myTopConfiguration.buttonInfo"
    ></myTop>
    <!-- 列表 -->
    <myList
      :tableData="myListConfiguration.tableData"
      :allType="myListConfiguration.allType"
      :objFn="myListConfiguration.objFn"
      :statueObj="myListConfiguration.statueObj"
    >
    </myList>
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
import myPaging from "../utilComponents/myPaging.vue";
import myList from "../utilComponents/myList.vue";
import myTop from "../utilComponents/myTop.vue";
export default {
  name: "classList",
  components: {
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
        buttonInfo:{
          type:"primary"
        }
      },
      myListConfiguration: {
        allType: [
          {
            // dateType表示的是数据
            dateType: "date",
            // 数据显示的名字
            showName: "Id",
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
            showName: "性别",
          },
          {
            dateType: "name",
            showName: "手机号",
          },
          {
            dateType: "date",
            showName: "创建时间",
          },
        ],
        //   函数
        objFn: [
          {
            type: "",
            callFn: this.editorFn,
            showInfo: "禁用",
          },
          {
            type: "",
            callFn: this.editorFn,
            showInfo: "编辑",
          },
          {
            type: "danger",
            callFn: this.deleteFn,
            showInfo: "删除",
          },
        ],
        // 数据
        tableData: [
          {
            id: "1",
            date: "2022-12-06 15:19:34",
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
        statueObj: {
          type: "success",
          showName: "启用",
        },
      },
      //   分页所需数据
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
    deleteFn(id) {
      console.log(id);
    },
    editorFn(id) {
      console.log(id);
    },
    searchFn(obj) {
      console.log("查询", obj);
    },
  },
};
</script>

<style>
</style>
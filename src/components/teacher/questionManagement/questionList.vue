<template>
  <div>
    <myTop
      :inputInfoObj="myTopConfiguration.inputInfoObj"
      :searchFn="searchFn"
      :seletcInfoObjOne="myTopConfiguration.seletcInfoObjOne"
      :seletcInfoObjTwo="myTopConfiguration.seletcInfoObjTwo"
      :buttonInfo="myTopConfiguration.buttonInfo"
    ></myTop>
    <myList
      :tableData="myListConfiguration.tableData"
      :allType="myListConfiguration.allType"
      :objFn="myListConfiguration.objFn"
    ></myList>
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
import myTop from "../utilComponents/myTop.vue";
import myList from "../utilComponents/myList.vue";
import myPaging from "../utilComponents/myPaging.vue";
export default {
  name: "questionList",
  components: {
    myTop,
    myList,
    myPaging,
  },
  data() {
    return {
      // 顶部配置
      myTopConfiguration: {
        inputInfoObj: {
          showName: "题目ID:",
          transferName: "userName",
        },
        seletcInfoObjOne: {
          showName: "学科",
          // 请求的接口类型
          fnType: "getClass",
          // 后端对应的变量名
          transferName: "class",
        },
        seletcInfoObjTwo: {
          showName: "题型",
          // 请求的接口类型
          fnType: "getTopic",
          // 后端对应的变量名
          transferName: "class",
        },
        buttonInfo: {
          type: false,
        },
      },
      myListConfiguration: {
        allType: [
          {
            // dateType表示的是数据
            dateType: "date",
            // 数据显示的名字
            showName: "id",
          },
          {
            dateType: "name",
            showName: "学科",
          },
          {
            dateType: "name",
            showName: "名称",
          },
          {
            dateType: "name",
            showName: "班级",
          },
          {
            dateType: "name",
            showName: "创建时间",
          },
        ],
        //   函数
        objFn: [
          {
            type: "",
            callFn: this.editorFn,
            showInfo: "编辑",
          },
          {
            type: "",
            callFn: this.seeFn,
            showInfo: "查看",
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
      },
      //   分页所需数据
      nowPage: 1,
      pageSize: 10,
      allNums: 100,
    };
  },
  methods: {
    searchFn(obj) {
      console.log(obj);
    },
    seeFn(obj) {
      console.log("查看", obj);
    },
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
  },
};
</script>

<style>
</style>
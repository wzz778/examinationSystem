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
import { getAllUser } from "@/myAxios/teacher/index";
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
          transferName: "name",
        },
        buttonInfo: {
          type: "primary",
        },
      },
      myListConfiguration: {
        allType: [
          {
            // dateType表示的是数据
            dateType: "id",
            // 数据显示的名字
            showName: "Id",
          },
          {
            dateType: "userName",
            showName: "用户名",
          },
          {
            dateType: "name",
            showName: "真实姓名",
          },
          {
            dateType: "sex",
            showName: "性别",
          },
          {
            dateType: "phone",
            showName: "手机号",
          },
          {
            dateType: "createTime",
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
        tableData: [],
        statueObj: {
          type: "success",
          showName: "启用",
        },
      },
      //   分页所需数据
      nowPage: 1,
      pageSize: 10,
      allNums: 100,
      searchObj: null,
    };
  },
  methods: {
    pageChangeFn(val) {
      this.nowPage = val;
      this.getInfo();
    },
    sizeChangeFn(val) {
      this.pageSize = val;
      this.getInfo();
    },
    deleteFn(id) {
      console.log(id);
    },
    editorFn(id) {
      console.log(id);
    },
    searchFn(obj) {
      console.log("查询", obj);
      this.searchObj = obj;
      this.getInfo();
    },
    getInfo() {
      let obj = {
        nodePage: this.nowPage,
        pageSize: this.pageSize,
        power: 1,
      };
      Object.assign(obj, this.searchObj);
      getAllUser(obj).then((result) => {
        console.log("获取用户", result);
        this.myListConfiguration.tableData = result.data.data.records;
        this.allNums = result.data.data.total;
      });
    },
  },
  mounted() {
    this.getInfo();
  },
};
</script>

<style>
</style>
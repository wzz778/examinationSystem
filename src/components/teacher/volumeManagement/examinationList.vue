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
import { getPaper, deletePaper } from "@/myAxios/teacher/index";
export default {
  name: "examinationList",
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
          showName: "试卷ID:",
          transferName: "id",
        },
        seletcInfoObjOne: {
          showName: "学科",
          // 请求的接口类型
          fnType: "getSubjectFn",
          // 后端对应的变量名
          transferName: "sId",
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
            dateType: "name",
            showName: "学科",
          },
          {
            dateType: "examName",
            showName: "名称",
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
      searchObj: null,
    };
  },
  methods: {
    searchFn(obj) {
      this.searchObj = obj;
      this.getInfo();
    },
    pageChangeFn(val) {
      this.nowPage = val;
      this.getInfo();
    },
    sizeChangeFn(val) {
      this.pageSize = val;
      this.getInfo();
    },
    deleteFn(obj) {
      this.$confirm("确定要删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          deletePaper({ id: obj.id }).then((result) => {
            if (result.data.msg == "OK") {
              this.$message({
                type: "success",
                message: "删除成功!",
              });
              this.getInfo();
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    editorFn(obj) {
      this.$router.push({
        path: "/teacher/testCreat",
        query: {
          id: obj.id,
        },
      });
    },
    getInfo() {
      let obj = {
        beginIndex: this.nowPage,
        size: this.pageSize,
      };
      Object.assign(obj, this.searchObj);
      getPaper(obj).then((result) => {
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
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
import { getAllGradeHas, deleteGrade } from "@/myAxios/teacher/index";
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
          showName: "班级名称:",
          transferName: "name",
        },
      },
      myListConfiguration: {
        allType: [
          {
            // dateType表示的是数据
            dateType: "id",
            // 数据显示的名字
            showName: "ID",
          },
          {
            dateType: "grade",
            showName: "班级名称",
          },
          {
            dateType: "code",
            showName: "班级口令",
          },
          {
            dateType: "name",
            showName: "班级人数",
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
        tableData: [],
      },
      //   分页所需数据
      nowPage: 1,
      pageSize: 10,
      allNums: 0,
      searchObj: null,
    };
  },
  methods: {
    pageChangeFn(val) {
      this.nowPage = val;
      this.getAllGradeFn();
    },
    sizeChangeFn(val) {
      this.pageSize = val;
      this.getAllGradeFn();
    },
    deleteFn(obj) {
      console.log(obj);
      this.$confirm("确定要删除班级吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          deleteGrade({ ids: obj.id }).then((result) => {
            console.log("删除", result);
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
        path: "/teacher/classCreat",
        query: {
          className: obj.grade,
          id: obj.id,
        },
      });
    },
    searchFn(obj) {
      this.searchObj = obj;
    },
    getAllGradeFn() {
      // 搜索
      let obj = { nodePage: this.nowPage, pageSize: this.pageSize };
      getAllGradeHas(obj).then((result) => {
        this.myListConfiguration.tableData = result.data.data.records;
        this.allNums = result.data.data.total;
      });
    },
  },
  mounted() {
    this.getAllGradeFn();
  },
};
</script>

<style>
</style>
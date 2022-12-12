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
import myPaging from "./utilComponents/myPaging.vue";
import myList from "./utilComponents/myList.vue";
import myTop from "./utilComponents/myTop.vue";
import { getAllUser, deleteStudent } from "@/myAxios/teacher/index";

export default {
  name: "studentList",
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
        tableData: [],
        allType: [
          {
            // dateType表示的是数据
            dateType: "id",
            // 数据显示的名字
            showName: "ID",
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
            dateType: "name",
            showName: "学级",
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
      searchObj: null,
    };
  },
  methods: {
    pageChangeFn(val) {
      this.nowPage = val;
      console.log("组件里边的页数", val);
      this.getInfo();
    },
    sizeChangeFn(val) {
      this.pageSize = val;
      console.log("组件里边的条数", val);
      this.getInfo();
    },
    deleteFn(obj) {
      this.$confirm("确定要删除吗?")
        .then(() => {
          console.log("确定");
          deleteStudent({ isd: obj.id }).then((result) => {
            console.log("删除接口", result);
          });
        })
        .catch(() => {
          this.$message("已取消");
        });
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
        power: 0,
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

<style scoped>
.el-button {
  padding: 10px;
}
</style>
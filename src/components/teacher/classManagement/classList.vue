<template>
  <div>
    <!-- 列表 -->
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
import myPaging from "../utilComponents/myPaging.vue";
import myList from "../utilComponents/myList.vue";
export default {
  name: "classList",
  comments: {
    myPaging,
    myList,
  },
  data() {
    return {
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
      //   分页所需数据
      nowPage: 1,
      pageSize: 10,
      allNums: 100,
      allType: [
        {
          // dateType表示的是数据
          dateType: "date",
          // 数据显示的名字
          showName: "ID",
        },
        {
          dateType: "name",
          showName: "班级名称",
        },
        {
          dateType: "name",
          showName: "班级口令",
        },
        {
          dateType: "name",
          showName: "班级人数",
        },
        {
          dateType: "name",
          showName: "创建时间",
        },
      ],
      //   函数
      objFn: [
        {
          type: "danger",
          callFn: this.editorFn,
          showInfo: "删除",
        },
        {
          type: "danger",
          callFn: this.deleteFn,
          showInfo: "删除",
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
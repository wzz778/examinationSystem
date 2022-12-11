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
import { getOfClassQuestion } from "@/myAxios/teacher/index";
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
          transferName: "id",
        },
        seletcInfoObjTwo: {
          showName: "题型",
          // 请求的接口类型
          fnType: "getTopic",
          // 后端对应的变量名
          transferName: "type",
        },
        buttonInfo: {
          type: false,
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
            dateType: "type",
            showName: "题型",
          },
          {
            dateType: "questionContent",
            showName: "题干",
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
        tableData: [],
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
    seeFn(obj) {
      console.log("查看", obj);
    },
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
    editorFn(obj) {
      console.log(obj);
      let pathUrl="singleChoice"
      if(obj.type=='填空题'){
        pathUrl="gapFilling"
      }
      if(obj.type=="多选题"){
        pathUrl="multiSelect"
      }
      if(obj.type=="判断题"){
        pathUrl="judgmentQuestion"
      }
      if(obj.type=="简答题"){
        pathUrl="shortAnswer"
      }
      this.$router.push({
        path:`/teacher/${pathUrl}`,
        query:{
          id:obj.id
        }
      })
    },
    // 题型
    getTopicType(typeNum) {
      switch (typeNum) {
        case 1:
          return "单选题";
        case 2:
          return "多选题";
        case 3:
          return "判断题";
        case 4:
          return "填空题";
        case 5:
          return "简答题";
      }
    },
    getInfo() {
      let obj = {
        size: this.pageSize,
        beginIndex: this.nowPage,
      };
      Object.assign(obj, this.searchObj);
      getOfClassQuestion(obj).then((result) => {
        for (let i = 0; i < result.data.data.list.length; i++) {
          // 题型
          result.data.data.list[i].type = this.getTopicType(
            result.data.data.list[i].type
          );
          //

          result.data.data.list[i].questionContent = JSON.parse(
            result.data.data.list[i].questionContent
          )
            .topicInfo.replace(
              /<(style|script|iframe)[^>]*?>[\s\S]+?<\/\1\s*>/gi,
              ""
            )
            .replace(/<[^>]+?>/g, "")
            .replace(/\s+/g, " ")
            .replace(/ /g, " ")
            .replace(/>/g, " ")
            .replace(/&nbsp;/g, "");
        }
        this.myListConfiguration.tableData = result.data.data.list;
        this.allNums = result.data.data.allCount;
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
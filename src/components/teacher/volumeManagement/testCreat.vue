<template>
  <div>
    <el-form label-width="80px">
      <el-form-item label="年级">
        <el-select v-model="value1" placeholder="请选择">
          <el-option
            v-for="item in classOptions"
            :key="item"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="学科">
        <el-select v-model="value2" placeholder="请选择">
          <el-option
            v-for="item in getOptions"
            :key="item.id"
            :label="item.subjectName"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="试卷类型">
        <el-select v-model="value3" placeholder="请选择">
          <el-option
            v-for="item in testType"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <!-- 题目 -->
      <template v-for="(item, index) in topicsList">
        <el-form-item :label="item.name + (index + 1)" :key="index">
          <el-input
            class="topicSty"
            placeholder="请输入"
            v-model="item.value"
          ></el-input>
          <el-button type="text" class="topicBtn" @click="addPoticsmall(index)"
            >添加题目</el-button
          >
          <el-button type="text" class="topicBtn" @click="delTopic(index)"
            >删除</el-button
          >
          <template v-for="(tempObj, quesIndex) in getSmallQuestion(index)">
            <el-form-item
              :key="quesIndex"
              :label="'题目' + (quesIndex + 1)"
              class="smallQuestionSty"
            >
              <el-row>
                <el-col :span="22">
                  <el-card :body-style="{ padding: '0px' }">
                    <!-- 题干 -->
                    <el-form-item label="题干">
                      <div
                        v-html="JSON.parse(tempObj.questionContent).topicInfo"
                      ></div>
                    </el-form-item>
                    <!-- 选项 -->
                    <template
                      v-if="
                        JSON.parse(tempObj.questionContent).type != 4 &&
                        JSON.parse(tempObj.questionContent).type != 5
                      "
                    >
                      <el-form-item label="选项">
                        <template
                          v-for="(optionObj, optionIndex) in JSON.parse(
                            tempObj.questionContent
                          ).optionsInfo"
                        >
                          <el-form-item
                            :label="optionObj.options"
                            :key="optionIndex"
                          >
                            <div v-html="optionObj.value"></div>
                          </el-form-item>
                        </template>
                      </el-form-item>
                    </template>
                  </el-card>
                </el-col>
                <el-col :span="1"
                  ><el-button
                    type="text"
                    class="button"
                    @click="delSmallQuestion(index, tempObj.id)"
                    >删除</el-button
                  ></el-col
                >
              </el-row>
            </el-form-item>
          </template>
        </el-form-item>
      </template>
      <el-form-item label="试卷名称">
        <el-input v-model="testName" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="建议时长">
        <el-input-number
          v-model="num"
          :min="1"
          :max="600"
          label="描述文字"
        ></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-col>
          <el-button type="primary" @click="submitFn">提交</el-button>
          <el-button @click="clearAll">重置</el-button>
          <el-button type="success" @click="addTopic">添加标题</el-button>
        </el-col>
      </el-form-item>
    </el-form>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="70%"
      :before-close="handleClose"
    >
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
        :hasSelection="myListConfiguration.hasSelection"
      ></myList>
      <myPaging
        :nowPage="nowPage"
        :allNums="allNums"
        :pageSize="pageSize"
        :pageChangeFn="pageChangeFn"
        :sizeChangeFn="sizeChangeFn"
      ></myPaging>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="sureFn">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { InputNumber, Col, Dialog, Row } from "element-ui";
import myTop from "../utilComponents/myTop.vue";
import myList from "../utilComponents/myList.vue";
import myPaging from "../utilComponents/myPaging.vue";
import {
  getOfClassQuestion,
  getAllSubject,
  publishPaper,
  getPaper,
  updatePaper,
} from "@/myAxios/teacher/index";
export default {
  name: "testCreat",
  components: {
    [InputNumber.name]: InputNumber,
    [Col.name]: Col,
    [Dialog.name]: Dialog,
    [Row.name]: Row,
    myList,
    myTop,
    myPaging,
  },
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
      testName: "",
      num: 0,
      dialogVisible: false,
      classOptions: [
        "一年级",
        "二年级",
        "三年级",
        "四年级",
        "五年级",
        "六年级",
        "初一",
        "初二",
        "初三",
        "高一",
        "高二",
        "高三",
      ],
      subjectOptions: [],
      testType: [
        {
          value: "1",
          label: "固定试卷",
        },
        {
          value: "4",
          label: "时段试卷",
        },
        {
          value: "6",
          label: "任务试卷",
        },
      ],
      // 题目列表
      topicsList: [
        {
          value: "",
          name: "标题",
          beginIndex: 0,
          length: 0,
        },
      ],
      myTopConfiguration: {
        inputInfoObj: {
          showName: "ID:",
          transferName: "id",
        },
        seletcInfoObjTwo: {
          showName: "题型",
          // 请求的接口类型
          fnType: "getTopic",
          // 后端对应的变量名
          transferName: "type",
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
            dateType: "type",
            showName: "题型",
          },
          {
            dateType: "showInfo",
            showName: "题干",
          },
        ],
        // 数据
        tableData: [],
        hasSelection: true,
      },
      nowPage: 1,
      pageSize: 10,
      allNums: 100,
      addTopicFor: -1,
      searchObj: null,
    };
  },
  methods: {
    handleClose(done) {
      done();
    },
    delTopic(index) {
      this.topicsList.splice(index, 1);
      // 删除大题
      this.$store.commit("teacher/DELTOPIC", {
        index: index,
      });
    },
    addTopic() {
      this.topicsList.push({
        value: "",
        name: "标题",
        beginIndex: 0,
        length: 0,
      });
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
    editorFn(id) {
      console.log(id);
    },
    searchFn(obj) {
      this.searchObj = obj;
      this.getInfo();
    },
    addPoticsmall(index) {
      this.getInfo();
      this.dialogVisible = true;
      this.addTopicFor = index;
    },
    // 弹窗确定
    sureFn() {
      this.dialogVisible = false;
      this.$bus.$emit("choiceTopic", this.addTopicFor);
    },
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
          result.data.data.list[i].showInfo = JSON.parse(
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
        // 去除相同值
        let choiceIds = this.$store.state.teacher.choiceIds;
        this.myListConfiguration.tableData = result.data.data.list.filter(
          (e) => !choiceIds.some((e2) => e2 == e.id)
        );
        // 修改页数
        this.allNums = result.data.data.allCount - choiceIds.length;
      });
    },
    getSubjectFn() {
      getAllSubject({}).then((result) => {
        this.subjectOptions = result.data.data;
      });
    },
    // 删除单个小题(index表示第几大题，id表示小题id)
    delSmallQuestion(index, id) {
      this.$store.commit("teacher/DELSMALLQUEST", {
        index: index,
        id: id,
      });
    },
    // 提交
    submitFn() {
      if (this.value2 == "") {
        this.$message({
          type: "warning",
          message: "请选择学科",
        });
        return;
      }
      if (this.value3 == "") {
        this.$message({
          type: "warning",
          message: "请填写试卷类型",
        });
        return;
      }
      if (
        this.testName == "" ||
        this.value3.replace(/(^\s*)|(\s*$)/g, "") == ""
      ) {
        this.$message({
          type: "warning",
          message: "请填写试卷名称",
        });
        return;
      }
      if (this.num == "") {
        this.$message({
          type: "warning",
          message: "请填写建议时长",
        });
        return;
      }
      let topicObj = this.$store.state.teacher.choiceTopic;
      // 判断值是否为空
      for (let i = 0; i < this.topicsList.length; i++) {
        if (this.topicsList[i].value == "") {
          // 题目为空
          this.$message({
            type: "warning",
            message: `请填写标题${i + 1}的题目名称`,
          });
          return;
        }
        if (!topicObj[i]) {
          // 没有选择题目
          this.$message({
            type: "warning",
            message: `请选择标题${i + 1}的题目`,
          });
          return;
        }
        // 添加题目
        this.topicsList[i].beginIndex = i == 0 ? 0 : topicObj[i - 1].length;
        this.topicsList[i].length = topicObj[i].length;
      }
      let obj = {
        sId: this.value2,
        examName: this.testName.replace(/</g, "&lt;").replace(/>/g, "&gt;"),
        paperType: this.value3,
        suggestTime: this.num,
        ids: this.$store.state.teacher.choiceIds.toString(),
        paperFrame: JSON.stringify({
          ...this.topicsList,
        }),
      };
      if (this.$route.query.id) {
        obj.id = this.$route.query.id;
        updatePaper(obj).then((result) => {
          if (result.data.msg == "OK") {
            this.$message({
              message: "上传成功",
              type: "success",
            });
            this.clearAll();
          }
        })
        .catch(err=>{
          console.log(err);
        })
        return;
      }
      publishPaper(obj)
        .then((result) => {
          if (result.data.msg == "OK") {
            this.$message({
              message: "上传成功",
              type: "success",
            });
            this.clearAll();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    clearAll() {
      // 清空
      this.value1 = "";
      this.value2 = "";
      this.value3 = "";
      this.testName = "";
      this.num = 0;
      this.addTopicFor = -1;
      this.topicsList = [
        {
          value: "",
          name: "标题",
          beginIndex: 0,
          length: 0,
        },
      ];
      this.nowPage = 1;
      this.$store.commit("teacher/CLEARALL");
    },
    getSpecifyInfo() {
      getPaper({
        id: this.$route.query.id,
        beginIndex: 1,
        size: 1,
      }).then((result) => {
        let obj = result.data.data.records[0];
        this.testName = obj.examName;
        // ids
        let ids = obj.paperContentId.split(",").filter((item) => {
          return item != "";
        });
        // 题目框架
        let topicsList = JSON.parse(obj.paperFrame);
        let topicsListResult = [];
        let question = obj.ob.questions;
        let arr = [];
        for (let i in topicsList) {
          topicsListResult.push(topicsList[i]);
          arr.push(
            question.slice(
              topicsList[i].beginIndex,
              topicsList[i].length + topicsList[i].beginIndex
            )
          );
        }
        this.num = obj.suggestTime;
        this.topicsList = topicsListResult;
        this.value3 = obj.paperType.toString();
        this.$store.commit("teacher/CHANGETOPIC", {
          choiceTopic: arr,
          choiceIds: ids,
        });
        let tempArr = this.subjectOptions.filter((item) => {
          return item.id == obj.sid;
        });
        this.value1 = tempArr[0].levelName;
        this.value2 = obj.sid;
      });
    },
  },
  computed: {
    getSmallQuestion() {
      return function (index) {
        return this.$store.state.teacher.choiceTopic[index];
      };
    },
    getOptions() {
      if (this.value1 == "") {
        return [];
      }
      return this.subjectOptions.filter((item) => {
        return item.levelName == this.value1;
      });
    },
  },
  mounted() {
    this.getInfo();
    this.getSubjectFn();
    if (this.$route.query.id) {
      this.getSpecifyInfo();
      return
    }
    this.getInfo()
  },
  beforeDestroy() {
    this.clearAll();
  },
};
</script>

<style scoped>
.topicSty {
  width: 70%;
}

.topicBtn {
  margin-left: 10px;
}

.smallQuestionSty {
  margin-top: 20px;
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
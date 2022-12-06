<template>
  <div>
    <el-form label-width="80px">
      <el-form-item label="年级">
        <el-select v-model="value1" placeholder="请选择">
          <el-option
            v-for="item in classOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="学科">
        <el-select v-model="value2" placeholder="请选择">
          <el-option
            v-for="item in subjectOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
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
          <el-button type="text" class="topicBtn" @click="dialogVisible = true"
            >添加题目</el-button
          >
          <el-button type="text" class="topicBtn" @click="delTopic(index)"
            >删除</el-button
          >
          <template v-for="(tempObj, index) in item.smallQuestion">
            <el-form-item
              :key="index"
              :label="'题目' + (index + 1)"
              class="smallQuestionSty"
            >
              <el-row>
                <el-col :span="22">
                  <el-card
                    :body-style="{ padding: '0px' }"
                    v-html="tempObj.info"
                  >
                  </el-card>
                </el-col>
                <el-col :span="1"
                  ><el-button type="text" class="button"
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
          <el-button type="primary">提交</el-button>
          <el-button @click="clearAllFn">重置</el-button>
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
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  Select,
  Option,
  InputNumber,
  Col,
  Dialog,
  Card,
  Row,
} from "element-ui";
import myTop from "../utilComponents/myTop.vue";
import myList from "../utilComponents/myList.vue";
import myPaging from "../utilComponents/myPaging.vue";
export default {
  name: "testCreat",
  components: {
    [Select.name]: Select,
    [Option.name]: Option,
    [InputNumber.name]: InputNumber,
    [Col.name]: Col,
    [Dialog.name]: Dialog,
    [Card.name]: Card,
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
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      subjectOptions: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      testType: [
        {
          value: "选项1",
          label: "视频试卷",
        },
        {
          value: "选项2",
          label: "固定试卷",
        },
        {
          value: "选项3",
          label: "时段试卷",
        },
        {
          value: "选项4",
          label: "任务试卷试卷",
        },
      ],
      topicsList: [
        {
          value: "",
          name: "标题",
          smallQuestion: [
            {
              id: "1",
              info: `
                <img
                  src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                  class="image"
                />
                <div style="padding: 14px">
                  <span>好吃的汉堡</span>
                </div>`,
            },
            {
              id: "2",
              info: `
                <img
                  src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                  class="image"
                />
                <div style="padding: 14px">
                  <span>好吃的汉堡</span>
                </div>`,
            },
          ],
        },
      ],
      myTopConfiguration: {
        inputInfoObj: {
          showName: "ID:",
          transferName: "userName",
        },
        seletcInfoObjTwo: {
          showName: "题型",
          // 请求的接口类型
          fnType: "getTopic",
          // 后端对应的变量名
          transferName: "class",
        },
      },
      myListConfiguration: {
        allType: [
          {
            // dateType表示的是数据
            dateType: "date",
            // 数据显示的名字
            showName: "ID",
          },
          {
            dateType: "name",
            showName: "提醒",
          },
          {
            dateType: "name",
            showName: "题干",
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
        hasSelection: true,
      },
      nowPage: 1,
      pageSize: 10,
      allNums: 100,
    };
  },
  methods: {
    clearAllFn() {},
    addPotic() {},
    handleClose(done) {
      done();
    },
    delTopic(index) {
      console.log(index);
      this.topicsList.splice(index, 1);
    },
    addTopic() {
      this.topicsList.push({ value: "", name: "标题" });
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
    searchFn(obj) {
      console.log("查询", obj);
    },
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
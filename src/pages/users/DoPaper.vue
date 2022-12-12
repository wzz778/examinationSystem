<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <div class="countDown">
        <p>剩余时间</p>
        <span class="countDownTime">23分10秒</span>
      </div>
      <div class="topicTab">
        <a
          v-for="(topic, index) in paperData"
          :key="index"
          @click="toTopic('#t' + index)"
        >
          <el-tag type="info" class="tagItem">{{ index + 1 }}</el-tag>
        </a>
      </div>
      <div class="btn">
        <el-button type="primary">提交试卷</el-button>
      </div>
    </el-aside>

    <el-container class="content">
      <el-header style="text-align: right; font-size: 12px" class="title">
        <h3 class="paperName">{{ paperData.examName }}</h3>
        <div class="paperInfo">
          <span style="border-right: 1px solid rgb(202, 199, 199)"
            >时长：{{ paperData.suggestTime }}分钟</span
          >
          <span>总分：{{ paperData.paperScore }}</span>
        </div>
      </el-header>
      <el-main>
        <div class="topicPart" v-for="(part,index) in paperData" :key="index">
          <h3 class="topicPartName" v-html="JSON.parse(part.paperFrame)"></h3>
          <div v-for="(topic, index) in part.ob.questions" :key="index">
            <!-- 单选 -->
            <div
              class="topicItem"
              :id="'t' + index"
              v-if="JSON.parse(topic.questionContent).type == 1"
            >
              <div
                class="topicTitle"
                v-html="index + 1 + '、' + JSON.parse(topic.questionContent).topicInfo"
              ></div>
              <div class="choiceItem">
                <el-radio-group v-model="radio">
                  <div
                    v-for="(op, index) in JSON.parse(topic.questionContent).optionsInfo"
                    :key="index"
                    class="radioItem"
                  >
                    <el-radio :label="op.options"></el-radio>
                    <span
                      style="height: 30px; font-size: 15px"
                      v-html="op.value"
                    ></span>
                  </div>
                </el-radio-group>
              </div>
            </div>
            <!-- 多选 -->
            <div
              class="topicItem"
              :id="'t' + index"
              v-if="JSON.parse(topic.questionContent).type == 2"
            >
              <div class="topicItem">
                <div
                  class="topicTitle"
                  v-html="index + 1 + '、' + JSON.parse(topic.questionContent).topicInfo"
                ></div>
                <div class="choiceMoreItem">
                  <el-checkbox-group v-model="checkList" @change="checkMore">
                    <div
                      v-for="(op, index) in JSON.parse(topic.questionContent).optionsInfo"
                      :key="index"
                      class="radioItem"
                    >
                      <el-checkbox
                        :label="op.options"
                      ></el-checkbox>
                      <span
                        style="height: 30px; font-size: 15px"
                        v-html="op.value"
                      ></span>
                    </div>
                  </el-checkbox-group>
                </div>
              </div>
            </div>
            <!-- 判断 -->
            <div
              class="topicItem"
              :id="'t' + index"
              v-if="JSON.parse(topic.questionContent).type == 3"
            >
              <div class="topicItem">
                 <div
                class="topicTitle"
                v-html="index + 1 + '、' + JSON.parse(topic.questionContent).topicInfo"
              ></div>
                <div class="shortAnswerItem">
                  <el-radio-group v-model="judge" @change="judgeFun">
                    <el-radio :label="false">错误</el-radio>
                    <el-radio :label="true">正确</el-radio>
                  </el-radio-group>
                </div>
              </div>
            </div>

            <!-- 填空 -->
            <div
              class="topicItem"
              :id="'t' + index"
              v-if="JSON.parse(topic.questionContent).type == 4"
            >
              <div class="topicItem">
                 <div
                class="topicTitle"
                v-html="index + 1 + '、' + JSON.parse(topic.questionContent).topicInfo"
              ></div>
                <div class="blankItem">
                  <div class="inputBlank">
                    <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="请输入内容"
                    v-model="textarea"
                  >
                  </el-input>
                  </div>
                </div>
              </div>
            </div>
              <!-- 简答 -->
            <div
              class="topicItem"
              :id="'t' + index"
              v-if="JSON.parse(topic.questionContent).type == 5"
            >
              <div class="topicItem">
                 <div
                class="topicTitle"
                v-html="index + 1 + '、' + JSON.parse(topic.questionContent).topicInfo"
              ></div>
                <div class="shortAnswerItem">
                  <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="请输入内容"
                    v-model="textarea"
                  >
                  </el-input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import {
  Container,
  Main,
  Table,
  TableColumn,
  Header,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Aside,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Tag,
  Button,
  Input,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Backtop,
} from "element-ui";
import { getPapers } from "@/myAxios/user/yxyAxios";
export default {
  name: "DoPaper",
  data() {
    return {
      input: "",
      radio: "",
      checkList: [],
      four: ["红楼梦", "西游记", "水浒传", "三国演义"],
      textarea: "",
      judge: "",
      paperData: "",
      topics: "",
    };
  },
  components: {
    [Container.name]: Container,
    [Main.name]: Main,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Header.name]: Header,
    [Dropdown.name]: Dropdown,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem,
    [Aside.name]: Aside,
    [Menu.name]: Menu,
    [Submenu.name]: Submenu,
    [MenuItem.name]: MenuItem,
    [MenuItemGroup.name]: MenuItemGroup,
    [Tag.name]: Tag,
    [Button.name]: Button,
    [Input.name]: Input,
    [Radio.name]: Radio,
    [RadioGroup.name]: RadioGroup,
    [CheckboxGroup.name]: CheckboxGroup,
    [Checkbox.name]: Checkbox,
    [Backtop.name]: Backtop,
  },
  methods: {
    checkMore(val) {
      console.log(val);
    },
    judgeFun(val) {
      console.log(val);
    },
    toTopic(idName) {
      document.querySelector(idName).scrollIntoView(true);
    },
  },
  mounted() {
    let getPaperInfo = {
      beginIndex: 1,
      size: 1,
      id: this.$route.query.pid,
    };
    getPapers(getPaperInfo).then((res) => {
      console.log(res.data);
      this.paperData = res.data.records;
      console.log(JSON.parse(res.data.records[0].paperFrame))
    //   this.topics = this.paperData.ob;
    //   for (let i = 0; i < this.topics.questions.length; i++) {
    //     this.topics.questions[i].questionContent = JSON.parse(
    //       this.topics.questions[i].questionContent
    //     );
    //   }
    //   console.log("题", this.topics);
    });
  },
};
</script>

<style lang="less" scoped>
html {
  overflow: hidden;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
  height: 99vh;
  overflow-y: auto;
  overflow-x: hidden;
  div {
    margin: 20px 0;
    width: 190px;
    margin-left: 10px;
  }
}

.content {
  display: flex;
  height: 99vh;
  flex-direction: column;
  scroll-behavior: smooth;
}

/* 整个滚动条 */
.content ::-webkit-scrollbar {
  /* 对应纵向滚动条的宽度 */
  width: 10px;
  /* 对应横向滚动条的宽度 */
  height: 10px;
}

/* 滚动条上的滚动滑块 */
.content ::-webkit-scrollbar-thumb {
  background-color: #49b1f5;
  border-radius: 32px;
}

/* 滚动条轨道 */
.content ::-webkit-scrollbar-track {
  background-color: #dbeffd;
  border-radius: 32px;
}

.el-main {
  overflow-y: auto;
  flex: 1;
  scroll-behavior: smooth;
}

.paperTitle {
  font-size: 17px;
  font-weight: 500;
}

.paperName {
  font-size: 18px;
  float: left;
}
.paperInfo {
  display: flex;
  height: 100%;
  font-size: 16px;
  color: #666;
  float: right;
  margin-top: 20px;
  span {
    display: inline-block;
    padding: 0 8px;
    height: 30px;
    line-height: 30px;
  }
}
.countDown {
  width: 90%;
  margin-left: 5%;
  border-top: 1px solid rgb(230, 230, 230);
  border-bottom: 1px solid rgb(230, 230, 230);
  font-size: 15px;
  color: #666;
  text-align: center;
  padding: 20px 0;
  .countDownTime {
    font-size: 17px;
    color: red;
    margin-top: 10px;
  }
}
.btn {
  width: 100%;
  display: flex;
  justify-content: center;
}

.tagItem {
  width: 30px;
  height: 30px;
  text-align: center;
  margin: 6px;
  cursor: pointer;
}

//题目
.topicPartName {
  display: inline-block;
  width: auto;
  height: 50px;
  line-height: 50px;
  padding: 0 15px;
  background-color: cornflowerblue;
  border-radius: 5px;
  color: aliceblue;
}
.topicItem {
  padding: 35px 0;
}
.topicTitle {
  display: flex;
  span {
    line-height: 30px;
  }
}
.radioItem {
  display: flex;
  align-items: center;
  span {
    line-height: 30px;
  }
}
.choiceItem,
.choiceMoreItem,
.shortAnswerItem {
  margin-top: 15px;
  margin-left: 20px;
}
.inputBlank {
  display: flex;
  align-items: center;
  margin: 15px 0;
  margin-left: 20px;
  .el-input {
    width: 150px;
  }
}
</style>
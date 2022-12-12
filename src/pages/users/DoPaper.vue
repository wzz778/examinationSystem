<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <div class="countDown">
        <p>剩余时间</p>
        <span class="countDownTime">23分10秒</span>
      </div>
      <div class="topicTab">
        <a v-for="(tag, index) in 30" :key="index" @click="toTopic('#t'+index)">
          <el-tag type="info" class="tagItem">{{ index + 1 }}</el-tag>
        </a>
      </div>
      <div class="btn">
        <el-button type="primary">提交试卷</el-button>
      </div>
    </el-aside>

    <el-container class="content">
      <el-header style="text-align: right; font-size: 12px" class="title">
        <h3 class="paperName">20200912卷</h3>
        <div class="paperInfo">
          <span style="border-right: 1px solid rgb(202, 199, 199)"
            >时长：120分钟</span
          >
          <span>总分：100</span>
        </div>
      </el-header>
      <el-main>
        <!-- 单选 -->
        <div class="topicPart">
          <h3 class="topicPartName">第一部分</h3>
          <div class="topicItem" id="t0">
            <p>1.中华四大名著都有哪些，下列正确的是：</p>
            <div class="choiceItem">
              <el-radio-group v-model="radio">
                <el-radio :label="1">红楼梦</el-radio>
                <el-radio :label="2">白楼梦</el-radio>
                <el-radio :label="3">青楼梦</el-radio>
                <el-radio :label="4">绿楼梦</el-radio>
              </el-radio-group>
            </div>
          </div>
          <!-- 填空 -->
          <div class="topicItem"  id="t1">
            <p>2.中华四大名著都有_、_、_、_哪些</p>
            <div class="blankItem">
              <div class="inputBlank">
                1、<el-input placeholder="请输入内容" v-model="input" clearable>
                </el-input>
              </div>
              <div class="inputBlank">
                2、<el-input placeholder="请输入内容" v-model="input" clearable>
                </el-input>
              </div>
              <div class="inputBlank">
                3、<el-input placeholder="请输入内容" v-model="input" clearable>
                </el-input>
              </div>
              <div class="inputBlank">
                4、<el-input placeholder="请输入内容" v-model="input" clearable>
                </el-input>
              </div>
            </div>
          </div>
          <!-- 多选 -->
          <div class="topicItem"  id="t2">
            <p>3.中华四大名著都有哪些，下列正确的是：</p>
            <div class="choiceMoreItem">
              <el-checkbox-group v-model="checkList" @change="checkMore">
                <el-checkbox
                  v-for="(f, index) in four"
                  :key="index"
                  :label="f"
                  >{{ f }}</el-checkbox
                >
              </el-checkbox-group>
            </div>
          </div>
          <!-- 简答 -->
          <div class="topicItem"  id="t3">
            <p id="i">4.中华四大名著都有哪些，下列正确的是：</p>
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
          <!-- 判断 -->
          <div class="topicItem"  id="t4">
            <p>5.中华四大名著有西游记吗：</p>
            <div class="shortAnswerItem">
              <el-radio-group v-model="judge" @change="judgeFun">
                <el-radio :label="false">错误</el-radio>
                <el-radio :label="true">正确</el-radio>
              </el-radio-group>
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
    };
  },
  methods: {
    checkMore(val) {
      console.log(val);
    },
    judgeFun(val) {
      console.log(val);
    },
    toTopic(idName){
        document.querySelector(idName).scrollIntoView(true);
    }
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
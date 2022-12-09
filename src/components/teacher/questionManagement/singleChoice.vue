<template>
  <div>
    <el-form label-width="80px">
      <questionTop
        :disciplineChangeFn="disciplineChangeFn"
        :questionStemChangeFn="questionStemChangeFn"
      ></questionTop>
      <!-- 中间内容 -->
      <el-form label-width="80px">
        <el-form-item label="选项:">
          <template v-for="(item, index) in showOptions">
            <el-form-item :label="item.options" :key="index" label-width="50px">
              <el-input
                v-model="item.value"
                clearable
                placeholder="请选择"
                class="optionsSty"
                @click.native="optionsFn(index)"
              ></el-input>
              <el-button
                class="delSty"
                v-if="index == showOptions.length - 1 && index != 1"
                type="danger"
                @click="delFn"
                icon="el-icon-delete"
              ></el-button>
            </el-form-item>
          </template>
        </el-form-item>
        <el-form-item label="标答">
          <template v-for="(item, index) in showOptions">
            <el-radio
              v-model="trueOptions"
              :label="item.options"
              :key="index"
              >{{ item.options }}</el-radio
            >
          </template>
        </el-form-item>
      </el-form>
      <!-- 选择框 -->
      <questionBottom
        :scoreChangeFn="scoreChangeFn"
        :difficultyChangeFn="difficultyChangeFn"
        :knowledgeChangeFn="knowledgeChangeFn"
        :knowledge="knowledge"
        :parsingChangeFn="parsingChangeFn"
      ></questionBottom>
      <el-form-item>
        <el-col>
          <el-button type="primary" @click="submitFn">提交</el-button>
          <el-button @click="clearAllFn">重置</el-button>
          <el-button type="success" @click="addOptionsFn">添加选项</el-button>
          <el-button type="success" @click="dialogVisible = true"
            >预览</el-button
          >
        </el-col>
      </el-form-item>
    </el-form>
    <!-- 预览 -->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="60%">
      <el-form label-width="80px">
        <el-form-item label="题干:">
          <!-- 题目 -->
          <div v-html="questionStem"></div>
        </el-form-item>
        <el-form-item label="选项:">
          <!-- 选项 -->
          <template v-for="(item, index) in showOptions">
            <el-form-item :key="index" :label="item.options">
              <div v-html="item.value"></div>
            </el-form-item>
          </template>
        </el-form-item>
      </el-form>
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
import { Col, Radio, Dialog } from "element-ui";
import questionTop from "../utilComponents/questionTop.vue";
import questionBottom from "../utilComponents/questionBottom.vue";
import { addQuestion } from "@/myAxios/teacher/index";
export default {
  name: "singleChoice",
  components: {
    questionBottom,
    questionTop,
    [Col.name]: Col,
    [Radio.name]: Radio,
    [Dialog.name]: Dialog,
  },
  data() {
    return {
      score: 0,
      difficulty: 0,
      knowledge: "",
      discipline: "",
      questionStem: "",
      trueOptions: "",
      parsing: "",
      //   选项
      allOptions: [
        {
          options: "A",
          value: "",
        },
        {
          options: "B",
          value: "",
        },
        {
          options: "C",
          value: "",
        },
        {
          options: "D",
          value: "",
        },
        {
          options: "E",
          value: "",
        },
        {
          options: "F",
          value: "",
        },
        {
          options: "G",
          value: "",
        },
      ],
      showOptions: [
        {
          options: "A",
          value: "",
        },
        {
          options: "B",
          value: "",
        },
        {
          options: "C",
          value: "",
        },
        {
          options: "D",
          value: "",
        },
      ],
      dialogVisible: false,
    };
  },
  methods: {
    scoreChangeFn(val) {
      this.score = val;
    },
    difficultyChangeFn(val) {
      this.difficulty = val;
    },
    knowledgeChangeFn(val) {
      this.knowledge = val;
    },
    // 学科
    disciplineChangeFn(val) {
      this.discipline = val;
    },
    // 题干
    questionStemChangeFn(val) {
      this.questionStem = val;
    },
    clearAllFn() {
      (this.showOptions = [
        {
          options: "A",
          value: "",
        },
        {
          options: "B",
          value: "",
        },
        {
          options: "C",
          value: "",
        },
        {
          options: "D",
          value: "",
        },
      ]),
        this.$bus.$emit("clearAll");
    },
    addOptionsFn() {
      // 添加选项
      this.showOptions.push(this.allOptions[this.showOptions.length]);
    },
    // 删除选项
    delFn() {
      this.showOptions.pop();
    },
    // 选项内容
    optionsFn(index) {
      this.$myRichText({ oriHtml: this.showOptions[index].value })
        .then((result) => {
          this.showOptions[index].value = result;
        })
        .catch(() => {});
    },
    // 解析改变
    parsingChangeFn(val) {
      this.parsing = val;
    },
    // 提交
    submitFn() {
      // 问题格式
      // 判断是否空值
      let obj = {
        sId: this.discipline,
        questionContent: JSON.stringify({
          type: 1,
          topicInfo: this.questionStem,
          optionsInfo: {
            ...this.showOptions,
          },
        }),
        answer: this.trueOptions,
        correct: this.parsing,
        score: this.score,
        difficult: this.difficulty,
        type: 1,
      };
      console.log(obj);
      addQuestion(obj)
        .then((result) => {
          if (result.data.msg == "OK") {
            this.$message({
              type: "success",
              message: "上传成功!",
            });
            this.clearAllFn();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.optionsSty {
  margin-bottom: 10px;
  width: 30%;
}

.delSty {
  padding: 10px;
  margin-left: 20px;
}
</style>
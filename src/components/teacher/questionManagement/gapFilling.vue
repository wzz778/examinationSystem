<template>
  <div>
    <el-form label-width="80px">
      <questionTop
        :disciplineChangeFn="disciplineChangeFn"
        :questionStemChangeFn="questionStemChangeFn"
      ></questionTop>
      <!-- 中间内容 -->
      <el-form label-width="80px">
        <el-form-item label="标答">
          <el-input
            v-model="trueOptions"
            placeholder="请输入"
            @click.native="standardFn"
          ></el-input>
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
          <el-button type="success" @click="dialogVisible = true"
            >预览</el-button
          >
        </el-col>
      </el-form-item>
    </el-form>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="60%">
      <el-form label-width="80px">
        <el-form-item label="题干:">
          <!-- 题目 -->
          <div v-html="questionStem"></div>
        </el-form-item>
        <el-form-item label="答案:">
          <!-- 选项 -->
          <el-form-item>
            <div v-html="trueOptions"></div>
          </el-form-item>
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
import { Col, Radio, CheckboxGroup, Checkbox, Dialog } from "element-ui";
import questionTop from "../utilComponents/questionTop.vue";
import questionBottom from "../utilComponents/questionBottom.vue";
import {
  addQuestion,
  updateQuestion,
  getOfClassQuestion,
} from "@/myAxios/teacher/index";
export default {
  name: "singleChoice",
  components: {
    questionBottom,
    questionTop,
    [Col.name]: Col,
    [Radio.name]: Radio,
    [CheckboxGroup.name]: CheckboxGroup,
    [Checkbox.name]: Checkbox,
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
    // 解析改变
    parsingChangeFn(val) {
      this.parsing = val;
    },
    standardFn() {
      this.$myRichText({ oriHtml: this.trueOptions })
        .then((result) => {
          this.trueOptions = result;
        })
        .catch(() => {});
    },
    // 题干
    questionStemChangeFn(val) {
      console.log("题干", val);
      this.questionStem = val;
    },
    clearAllFn() {
      this.trueOptions = "";
      this.$bus.$emit("clearAll");
    },
    submitFn() {
      // 判断是否是空值
      let obj = {
        SId: this.discipline,
        questionContent: JSON.stringify({
          type: 4,
          topicInfo: this.questionStem,
        }),
        answer: this.trueOptions,
        correct: this.parsing,
        score: this.score,
        difficult: this.difficulty,
        type: 4,
      };
      console.log(obj);
      if (this.$route.query.id) {
        obj.id = this.$route.query.id;
        updateQuestion(obj).then((result) => {
          if (result.data.msg == "OK") {
            this.$message({
              type: "success",
              message: "修改成功!",
            });
          }
          this.clearAllFn()
        });
        return;
      }
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
    getInfo() {
      getOfClassQuestion({
        size: 1,
        beginIndex: 1,
        id: this.$route.query.id,
      }).then((result) => {
        this.trueOptions = result.data.data.list[0].answer;
      });
    },
  },
  mounted() {
    if (this.$route.query.id) {
      // 获取数据
      this.getInfo();
    }
  },
};
</script>

<style scoped>
.optionsSty {
  margin-bottom: 10px;
  width: 30%;
}

.el-input {
  width: 80%;
}

.delSty {
  padding: 10px;
  margin-left: 20px;
}
</style>
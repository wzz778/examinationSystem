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
                @click.native="judgeFn(index)"
                clearable
                placeholder="请选择"
                class="optionsSty"
              ></el-input>
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
      showOptions: [
        {
          options: "A",
          value: "对",
        },
        {
          options: "B",
          value: "错",
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
    judgeFn(index) {
      this.$myRichText({ oriHtml: this.showOptions[index].value })
        .then((result) => {
          this.showOptions[index].value = result;
        })
        .catch(() => {});
    },
    // 学科
    disciplineChangeFn(val) {
      this.discipline = val;
    },
    // 题干
    questionStemChangeFn(val) {
      this.questionStem = val;
    },
    // 解析改变
    parsingChangeFn(val) {
      this.parsing = val;
    },
    clearAllFn() {
      this.showOptions = [
        {
          options: "A",
          value: "对",
        },
        {
          options: "B",
          value: "错",
        },
      ];
      this.trueOptions = "";
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
    submitFn() {
      // 判断是否空值
      if (this.discipline.toString().replace(/(^\s*)|(\s*$)/g, "") == "") {
        this.$message({
          message: "选择学科",
          type: "warning",
        });
        return;
      }
      if (this.questionStem.replace(/(^\s*)|(\s*$)/g, "") == "") {
        this.$message({
          message: "请输入题干",
          type: "warning",
        });
        return;
      }
      if (this.trueOptions.replace(/(^\s*)|(\s*$)/g, "") == "") {
        this.$message({
          message: "请输入正确答案",
          type: "warning",
        });
        return;
      }
      if (this.parsing.replace(/(^\s*)|(\s*$)/g, "") == "") {
        this.$message({
          message: "请输入解析",
          type: "warning",
        });
        return;
      }
      for (let i = 0; i < this.showOptions.length; i++) {
        if (this.showOptions[i].value.replace(/(^\s*)|(\s*$)/g, "") == "") {
          this.$message({
            message: `请输入第${i + 1}选项的值`,
            type: "warning",
          });
          return;
        }
      }
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
        type: 3,
        ids: this.knowledge.toString(),
      };
      if (this.$route.query.id) {
        obj.id = this.$route.query.id;
        updateQuestion(obj).then((result) => {
          if (result.data.msg == "OK") {
            this.$message({
              type: "success",
              message: "修改成功!",
            });
          }
          this.clearAllFn();
          this.$router.push({ path: "/teacher/judgmentQuestion" });
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
        let tempObj = JSON.parse(
          result.data.data.list[0].questionContent
        ).optionsInfo;
        let tempArr = [];
        for (let i in tempObj) {
          tempArr.push(tempObj[i]);
        }
        this.showOptions = tempArr;
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

.delSty {
  padding: 10px;
  margin-left: 20px;
}
</style>
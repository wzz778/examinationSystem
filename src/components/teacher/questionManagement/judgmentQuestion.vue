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
      ></questionBottom>
      <el-form-item>
        <el-col>
          <el-button type="primary">提交</el-button>
          <el-button @click="clearAllFn">重置</el-button>
          <el-button type="success">预览</el-button>
        </el-col>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { Col, Radio, CheckboxGroup, Checkbox } from "element-ui";
import questionTop from "../utilComponents/questionTop.vue";
import questionBottom from "../utilComponents/questionBottom.vue";
export default {
  name: "singleChoice",
  components: {
    questionBottom,
    questionTop,
    [Col.name]: Col,
    [Radio.name]: Radio,
    [CheckboxGroup.name]: CheckboxGroup,
    [Checkbox.name]: Checkbox,
  },
  data() {
    return {
      score: 0,
      difficulty: 0,
      knowledge: "",
      discipline: "",
      questionStem: "",
      trueOptions: "",
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
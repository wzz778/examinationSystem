<template>
  <div>
    <el-form-item label="年级">
      <el-select v-model="value" @change="value1 = ''">
        <el-option
          v-for="item in gradeArr"
          :key="item"
          :label="item"
          :value="item"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="学科">
      <el-select
        v-model="value1"
        @change="disciplineChange"
        placeholder="请先选择年级"
      >
        <el-option
          v-for="item in getOptions"
          :key="item.id"
          :label="item.subjectName"
          :value="item.id"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="题干">
      <el-input
        v-model="value2"
        @click.native="topicFn"
        placeholder="请选择"
      ></el-input>
    </el-form-item>
  </div>
</template>

<script>
import { Col } from "element-ui";
import { getAllSubject, getOfClassQuestion } from "@/myAxios/teacher/index";
export default {
  name: "questionTop",
  props: ["disciplineChangeFn", "questionStemChangeFn"],
  components: {
    [Col.name]: Col,
  },
  data() {
    return {
      value: "",
      value1: "",
      value2: "",
      options: [],
      gradeArr: [
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
    };
  },
  computed: {
    getOptions() {
      if (this.value == "") {
        return [];
      }
      return this.options.filter((item) => {
        return item.levelName == this.value;
      });
    },
  },
  methods: {
    clearAll() {
      this.value = "";
      this.value1 = "";
      this.value2 = "";
      this.options = [];
    },
    topicFn() {
      this.$myRichText({ oriHtml: this.value2 })
        .then((result) => {
          this.value2 = result;
          this.questionStemChangeFn(result);
        })
        .catch(() => {});
    },
    getSubjectFn() {
      getAllSubject({}).then((result) => {
        this.options = result.data.data;
      });
    },
    getInfo() {
      getOfClassQuestion({
        size: 1,
        beginIndex: 1,
        id: this.$route.query.id,
      }).then((result) => {
        let tempObj = result.data.data.list[0];
        this.value2 = JSON.parse(tempObj.questionContent).topicInfo;
        this.questionStemChangeFn(this.value2);
        this.value = tempObj.myAnswer.levelName;
        this.value1 = tempObj.myAnswer.id;
        this.disciplineChangeFn(this.value1);
      });
    },
    disciplineChange() {
      this.disciplineChangeFn(this.value1);
      this.$bus.$emit("getKnowledgeInfo", {
        grade: this.value,
        subjectId: this.value1,
      });
    },
  },
  mounted() {
    this.$bus.$on("clearAll", this.clearAll);
    this.getSubjectFn();
    if (this.$route.query.id) {
      // 获取数据
      this.getInfo();
    }
  },
  beforeDestroy() {
    this.$bus.$off("clearAll");
  },
};
</script>

<style scoped>
.el-input {
  width: 80%;
}
</style>
<template>
  <div>
    <el-form-item label="学科">
      <el-select
        v-model="value1"
        @change="disciplineChangeFn(value1)"
        placeholder="请选择"
      >
        <el-option
          v-for="item in options"
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
import { getAllSubject } from "@/myAxios/teacher/index";
export default {
  name: "questionTop",
  props: ["disciplineChangeFn", "questionStemChangeFn"],
  components: {
    [Col.name]: Col,
  },
  data() {
    return {
      value1: "",
      value2: "",
      options: [],
    };
  },
  methods: {
    clearAll() {
      console.log("顶部组件");
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
      getAllSubject({ beginIndex: 1, size: 10 }).then((result) => {
        console.log("所有学科", result.data);
        this.options = result.data.data.records;
      });
    },
  },
  mounted() {
    this.$bus.$on("clearAll", this.clearAll);
    this.getSubjectFn();
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
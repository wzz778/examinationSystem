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
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="题干">
      <el-input
        v-model="value2"
        @change="questionStemChangeFn(value2)"
        clearable
        placeholder="请选择"
      ></el-input>
    </el-form-item>
  </div>
</template>

<script>
import { Col, Select, Option } from "element-ui";
export default {
  name: "questionTop",
  props: ["disciplineChangeFn", "questionStemChangeFn"],
  components: {
    [Col.name]: Col,
    [Select.name]: Select,
    [Option.name]: Option,
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
    },
  },
  mounted() {
    this.$bus.$on("clearAll", this.clearAll);
  },
};
</script>

<style scoped>
.el-input {
  width: 80%;
}
</style>
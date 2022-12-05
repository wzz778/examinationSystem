<template>
  <div>
    <el-form-item label="解析">
      <el-input placeholder="请输入内容" v-model="value1"></el-input>
    </el-form-item>
    <el-form-item label="分数">
      <el-input-number
        v-model="num"
        @change="handleChange"
        :min="0"
        :max="100"
        label="描述文字"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="难度">
      <el-rate v-model="value2"></el-rate>
    </el-form-item>
    <el-form-item label="知识点">
      <el-select
        v-model="value3"
        multiple
        filterable
        clearable
        placeholder="请选择"
      >
        <el-option
          v-for="item in knowledgeArr"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
  </div>
</template>

<script>
import {
  Col,
  Form,
  FormItem,
  Rate,
  Option,
  InputNumber,
  Select,
} from "element-ui";
export default {
  name: "questionBottom",
  //  解析先不搞,分数改变的函数，难度改变的函数，知识点改变的函数
  props: [
    "scoreChangeFn",
    "difficultyChangeFn",
    "knowledgeChangeFn",
    "knowledge",
  ],
  components: {
    [Rate.name]: Rate,
    [FormItem.name]: FormItem,
    [Form.name]: Form,
    [Col.name]: Col,
    [Option.name]: Option,
    [InputNumber.name]: InputNumber,
    [Select.name]: Select,
  },
  data() {
    return {
      value1: "",
      value2: 0,
      value3: [],
      num: 1,
      knowledgeArr: [
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
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    clearAll() {
      console.log("底部组件的变化");
    },
  },
  mounted() {
    this.$bus.$on("clearAll", this.clearAll);
  },
};
</script>

<style scoped>
.from {
  position: relative;
}

.el-rate {
  margin-top: 10px;
}

.el-input {
  width: 80%;
}

.el-select {
  width: 80%;
}
</style>
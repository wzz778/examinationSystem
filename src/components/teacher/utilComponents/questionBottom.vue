<template>
  <div>
    <el-form-item label="解析">
      <el-input
        placeholder="请输入内容"
        v-model="value1"
        @click.native="parsingFn"
      ></el-input>
    </el-form-item>
    <el-form-item label="分数">
      <el-input-number
        v-model="num"
        @change="scoreChangeFn(num)"
        :min="0"
        :max="100"
        label="描述文字"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="难度">
      <el-rate v-model="value2" @change="difficultyChangeFn(value2)"></el-rate>
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
import { Col, Rate, InputNumber } from "element-ui";
import { getOfClassQuestion } from "@/myAxios/teacher/index";
export default {
  name: "questionBottom",
  //  解析先不搞,分数改变的函数，难度改变的函数，知识点改变的函数
  props: [
    "scoreChangeFn",
    "difficultyChangeFn",
    "knowledgeChangeFn",
    "knowledge",
    "parsingChangeFn",
  ],
  components: {
    [Rate.name]: Rate,
    [Col.name]: Col,
    [Option.name]: Option,
    [InputNumber.name]: InputNumber,
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
      this.value1 = "";
      this.value2 = 0;
      this.value3 = [];
      this.num = 1;
    },
    parsingFn() {
      this.$myRichText({ oriHtml: this.value1 })
        .then((result) => {
          this.value1 = result;
          this.parsingChangeFn(result);
        })
        .catch(() => {});
    },
    getInfo() {
      getOfClassQuestion({
        size: 1,
        beginIndex: 1,
        id: this.$route.query.id,
      }).then((result) => {
        console.log(result.data.data.list[0]);
        let tempObj = result.data.data.list[0];
        this.value1=tempObj.correct
        this.parsingChangeFn(this.value1)
        this.num=tempObj.score
        this.scoreChangeFn(this.num)
        this.value2=tempObj.difficult
        this.difficultyChangeFn(this.value2)
      });
    },
  },
  mounted() {
    this.$bus.$on("clearAll", this.clearAll);
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
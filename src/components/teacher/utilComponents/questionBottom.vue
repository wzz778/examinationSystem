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
        @change="selectChange"
        placeholder="请选择"
        multiple
      >
        <el-option :value="resultArr" style="height: auto">
          <el-tree
            :data="data"
            show-checkbox
            node-key="id"
            ref="tree"
            highlight-current
            :props="defaultProps"
            @check-change="handleCheckChange"
            :default-checked-keys="defaultArr"
          >
          </el-tree>
        </el-option>
      </el-select>
    </el-form-item>
  </div>
</template>

<script>
import { Col, Rate, InputNumber, Tree } from "element-ui";
import {
  getOfClassQuestion,
  knowledgePointTree,
} from "@/myAxios/teacher/index";
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
    [Tree.name]: Tree,
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
      defaultProps: {
        children: "children",
        label: "point",
      },
      data: null,
      resultArr: [],
      defaultArr: [],
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
        console.log("数据", result.data.data.list[0]);
        let tempObj = result.data.data.list[0];
        this.value1 = tempObj.correct;
        this.parsingChangeFn(this.value1);
        this.num = tempObj.score;
        this.scoreChangeFn(this.num);
        this.value2 = tempObj.difficult;
        this.difficultyChangeFn(this.value2);
        this.getKnowledgeInfo({
          grade: result.data.data.list[0].myAnswer.levelName,
          subjectId: result.data.data.list[0].myAnswer.id,
        });
        this.defaultArr = result.data.data.list[0].ids
          ? result.data.data.list[0].ids.splice(",")
          : [];
      });
    },
    getKnowledgeInfo(obj) {
      knowledgePointTree(obj).then((result) => {
        this.data = result.data.data;
        this.$nextTick(() => {
          this.handleCheckChange();
        });
      });
    },
    handleCheckChange() {
      let res = this.$refs.tree.getCheckedNodes(true, true); //这里两个true，1. 是否只是叶子节点 2. 是否包含半选节点（就是使得选择的时候不包含父节点）
      let arrLabel = [];
      let arr = [];
      res.forEach((item) => {
        arrLabel.push(item.point);
        arr.push(item);
      });
      this.resultArr = arr;
      this.value3 = arrLabel;
      let tempArr = this.resultArr.map((item) => {
        return item.id;
      });
      this.knowledgeChangeFn(tempArr);
    },
    selectChange(e) {
      var arrNew = [];
      var dataLength = this.resultArr.length;
      var eleng = e.length;
      console.log(this.resultArr);
      for (let i = 0; i < dataLength; i++) {
        for (let j = 0; j < eleng; j++) {
          if (e[j] === this.resultArr[i].point) {
            arrNew.push(this.resultArr[i]);
          }
        }
      }
      console.log("arrNew", arrNew);
      this.$refs.tree.setCheckedNodes(arrNew); //设置勾选的值
    },
  },
  mounted() {
    this.$bus.$on("clearAll", this.clearAll);
    if (this.$route.query.id) {
      // 获取数据
      this.getInfo();
    }
    this.$bus.$on("getKnowledgeInfo", this.getKnowledgeInfo);
  },
  beforeDestroy() {
    this.$bus.$off("clearAll");
    this.$bus.$off("getKnowledgeInfo");
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
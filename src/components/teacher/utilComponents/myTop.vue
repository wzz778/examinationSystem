<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="5" v-if="inputInfoObj">
        <el-form label-width="80px">
          <el-form-item :label="inputInfoObj.showName">
            <el-input v-model="input"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="5">
        <el-form label-width="80px">
          <el-form-item :label="selectShowNameOne">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="5">
        <el-form label-width="80px">
          <el-form-item :label="selectShowNameTwo">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="5">
        <el-form label-width="80px">
          <el-button type="primary">查询</el-button>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { Input, FormItem, Form, Col, Row, Select, Option } from "element-ui";
export default {
  name: "myTop",
  /* 
  input对象
      是否显现,显现的名字
  select对象
      每个是否显现,显现的名字，显现的是啥，请求的接口名字
  */
  props: ["inputInfoObj", "selectInfoObj"],
  components: {
    [Input.name]: Input,
    [FormItem.name]: FormItem,
    [Form.name]: Form,
    [Col.name]: Col,
    [Row.name]: Row,
    [Select.name]: Select,
    [Option.name]: Option,
  },
  data() {
    return {
      input: "",
      /* 选择框 */
      //   学科是否显现
      subject: true,
      //   班级是否显现
      class: true,
      /* 输入框 */
      inputShowName: "班级名称",
      //   最多两个选择框，
      selectShowNameOne: "学科",
      selectShowNameTwo: "班级",
      options: [
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
      value: "",
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style scoped>
.inputSty {
  display: inline;
}
</style>
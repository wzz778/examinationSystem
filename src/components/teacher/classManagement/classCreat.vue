<template>
  <div>
    <el-col>
      <el-form label-width="80px">
        <el-form-item label="班级名称">
          <el-input v-model="value" clearable placeholder="请选择"></el-input>
        </el-form-item>
      </el-form>
    </el-col>
    <div class="operationSty">
      <el-button type="primary" @click="submitFn">提交</el-button>
      <el-button @click="resetFn">重置</el-button>
    </div>
  </div>
</template>

<script>
import { Col, Form, FormItem, Input } from "element-ui";
export default {
  name: "classCreat",
  components: {
    [Input.name]: Input,
    [FormItem.name]: FormItem,
    [Form.name]: Form,
    [Col.name]: Col,
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    resetFn() {
      this.value = "";
    },
    submitFn() {
      // 判断是否是空值
      if (!this.value||this.value.replace(/(^\s*)|(\s*$)/g, "") == "") {
        this.$message.error("班级名称不能为空");
        this.value=""
        return;
      }
      //   忽略标签
    },
  },
};
</script>

<style scoped>
.operationSty {
  margin-left: 85px;
}
</style>
<template>
  <div class="pass">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="旧密码">
        <el-input show-password v-model="form.OldPass"></el-input>
      </el-form-item>
      <el-form-item label="新密码">
        <el-input show-password v-model="form.NewPass"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input show-password v-model="form.SePass"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="Submit">修改</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "UptadePass",
  data() {
    return {
      form: {
        Oldpass: "1111111",
        newPass: "",
        SePass: "",
      },
    };
  },
  methods: {
    Submit() {
      console.log("submit!");
    },
  },
};
</script>

<style lang="less" scoped>
.pass {
  padding-top: 20px;
  background-color: #ffffff;
}
</style>
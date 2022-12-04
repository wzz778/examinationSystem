<template>
  <div class="register">
    <div>
      <h4>用户注册：</h4>
      <p>考试网伴你一路前行</p>
    </div>
    <div class="readd">
      <el-input
        placeholder="请输入邮箱"
        v-model="emil"
        clearable
        style="width: 260px; margin: 30px 0px 18px 0px; background: white"
      >
      </el-input>
      <el-input
        placeholder="请输入密码"
        v-model="repass"
        show-password
        style="width: 260px"
      ></el-input>
      <el-input
        placeholder="请输入验证码"
        v-model="code"
        style="width: 260px; margin: 18px 0px 0px 0px"
      >
        <template slot="append">验证码</template>
      </el-input>
    </div>
    <el-button type="primary" style="width: 260px; margin-top: 80px"
      >注册</el-button
    >
    <div class="skip" @click="$emit('loJump')">返回登录页面</div>
  </div>
</template>

<script>
export default {
  name: "TestRegister",
  data(){
  return{
  repass:"",
  emil:'',
  code:'',
  }
  },
  methods: {
  },
};
</script>

<style  lang="less" scoped>
.register {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 3px 0 rgb(12 12 12 / 3%);
  border-radius: 3px;
  padding: 30px;
}
h4 {
  color: white;
}
.readd {
  width: 200px;
  height: 120px;
}
p {
  margin-top: 10px;
  color: aliceblue;
}
.skip {
  margin-top: 13px;
  font-size: 12px;
}
.skip:hover{
cursor: pointer;
color: cornflowerblue;
}
</style>
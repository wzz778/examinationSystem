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
        style="width: 260px; margin: 20px 0px 0px 0px; background: white"
      >
      </el-input>
      <el-input
        placeholder="请输入验证码"
        v-model="rcode"
        style="width: 260px; margin: 10px 0px 0px 0px"
      >
        <template slot="append"
          ><el-button :disabled="sendModel.countFlag" @click="sendCode">
            {{
              sendModel.btnMsg == null
                ? sendModel.countNum + "s后重新发送"
                : sendModel.btnMsg
            }}
          </el-button></template
        >
      </el-input>
      <el-input
        placeholder="请输入密码"
        v-model="repass"
        show-password
        style="width: 260px; margin: 10px 0px 0px 0px"
      ></el-input>
      <el-input
        placeholder="请输入账户"
        v-model="account"
        clearable
        style="width: 260px; margin: 10px 0px 0px 0px; background: white"
      >
      </el-input>
    </div>
    <el-button
      type="primary"
      style="width: 260px; margin-top: 100px"
      @click="regist"
      >注册</el-button
    >
    <div class="skip" @click="$emit('loJump')">返回登录页面</div>
  </div>
</template>

<script>
import { UserSend, Uregister } from "@/myAxios/user/zffAxios";
export default {
  name: "TestRegister",
  data() {
    return {
      repass: "",
      emil: "",
      rcode: "",
      account: "",
      n: "60",
      sendModel: {
        // 倒计时周期
        countNum: 60,
        // 用于倒计时标记，true-正在倒计时
        countFlag: false,
        // 定时器
        intervalBtn: {},
        // 默认按钮的值
        btnMsg: "获取验证码",
      },
    };
  },
  methods: {
    // 倒计时,验证码
    countDown() {
      // 设置btn倒计时时显示的信息
      this.sendModel.btnMsg = null;
      // 更改btn状态
      this.sendModel.countFlag = !this.sendModel.countFlag;
      // 设置倒计时
      this.sendModel.intervalBtn = setInterval(() => {
        if (this.sendModel.countNum <= 0) {
          // 重置btn提示信息
          this.sendModel.btnMsg = "获取验证码";
          // 清除定时器
          clearInterval(this.sendModel.intervalBtn);
          // 更改btn状态
          this.sendModel.countFlag = !this.sendModel.countFlag;
          // 重置倒计时状态
          this.sendModel.countNum = 60;
        }
        // 倒计时
        this.sendModel.countNum--;
      }, 1000);
    },
    async sendCode() {
      let data = {
        email: this.emil,
      };
      var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/; // eslint-disable-line no-unused-vars
      if (reg.test(this.emil)) {
        alert("验证码发送成功");
        this.countDown();
        console.log(await UserSend(data));
      } else {
        alert("邮箱格式错误");
      }
    },
    //注册
    async regist() {
      if (this.emil && this.rcode && this.account && this.repass) {
        alert("无空格");
        let rdata = {
          code: this.rcode,
          email: this.emil,
          password: this.repass,
          username: this.account,
        };
        console.log(await Uregister(rdata));
      } else {
        alert("有空格");
      }
    },
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
  margin-top: 20px;
  font-size: 12px;
}
.skip:hover {
  cursor: pointer;
  color: cornflowerblue;
}
.el-input {
  border-radius: 5px;
}
.el-input:hover {
  cursor: pointer;
}
</style>
<template>
  <div class="pass">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="邮箱">
        <el-input v-model="form.semail"> </el-input>
      </el-form-item>
      <el-form-item label="验证码">
        <el-input v-model="form.scode">
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
      </el-form-item>
      <el-form-item label="新密码">
        <el-input show-password v-model="form.newPass"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="Submit">修改</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { UserSend, ZupdatePassword } from "@/myAxios/user/zffAxios";
export default {
  name: "UptadePass",
  data() {
    return {
      form: {
        semail: "",
        newPass: "",
        scode: "",
      },
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
    sendCode() {
      let data = {
        email: this.form.semail,
      };
      var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/; // eslint-disable-line no-unused-vars
      if (reg.test(this.form.semail)) {
        UserSend(data).then((result) => {
          console.log("验证码", result);
          if (result.msg == "OK") {
            this.$message({
              message: "验证码发送成功",
              type: "success",
            });
            this.countDown();
          } else {
            this.$message.error(result.msg);
          }
        });
      } else {
        this.$message.error("邮箱格式错误");
      }
    },
    Submit() {
      if (this.form.semail && this.form.newPass && this.form.scode) {
        let sdata = {
          code: this.form.scode,
          password: this.form.newPass,
        };
        ZupdatePassword(sdata).then((result) => {
          console.log("更新密码", result);
          if (result.msg == "OK") {
            this.$message({
              message: "密码修改成功",
              type: "success",
            });
          }else{
          this.$message.error("修改失败");
          }
        });
      } else {
        this.$message.error("请将信息填写完整");
      }
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
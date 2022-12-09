<template>
  <div class="login">
    <div class="main">
      <div class="elogin">
        <div class="signin-info">
          <div class="logopanel m-b">
            <h1>
              <img
                alt="图标"
                src="https://www.mindskip.net:7001/student/static/img/logo2.b8c1a73c.png"
              />考试网
            </h1>
          </div>
          <div class="m-b"></div>
          <h4>欢迎使用<strong>考试网学习系统</strong></h4>
          <ul class="m-b">
            <li><i class="fa fa-arrow-circle-o-right m-r-xs"></i> 学习服务</li>
            <li><i class="fa fa-arrow-circle-o-right m-r-xs"></i> 班级课堂</li>
            <li><i class="fa fa-arrow-circle-o-right m-r-xs"></i> 针对训练</li>
            <li><i class="fa fa-arrow-circle-o-right m-r-xs"></i> 智能服务</li>
            <li><i class="fa fa-arrow-circle-o-right m-r-xs"></i> 考试测试</li>
          </ul>
        </div>
      </div>
      <div class="rlogin">
        <div class="from" v-show="judge == '登录'">
          <div>
            <h4>用户登录：</h4>
            <p>考试网伴你一路前行</p>
          </div>
          <div class="shu">
            <el-input
              placeholder="请输入账户"
              v-model="count"
              clearable
              style="width: 260px; margin: 30px 0px 18px 0px"
            >
            </el-input>
            <el-input
              placeholder="请输入密码"
              v-model="passard"
              show-password
              style="width: 260px"
            ></el-input>
          </div>
          <el-button
            type="primary"
            style="width: 260px; margin-top: 25px"
            @click="jump"
            >登录</el-button
          >
          <div class="skip">
            <span id="reset" @click="retJump">忘记密码</span
            ><span id="re" @click="reJump">去注册</span>
          </div>
        </div>
        <Register @loJump="loJump" v-show="judge == '注册'" />
        <Reset @loJump="loJump" v-show="judge == '重置'" />
      </div>
    </div>
  </div>
</template>

<script>
import jwt_decode from "jwt-decode";
import Register from "@/components/user/TestRegister";
import Reset from "@/components/user/TestReset";
import { Ulogin } from "@/myAxios/user/zffAxios";
export default {
  name: "TestLogin",
  components: { Register, Reset },
  data() {
    return {
      passard: "",
      count: "",
      judge: "登录",
      classArr: ["yang"],
    };
  },
  methods: {
    jump() {
      let data = {
        password: this.passard,
        username: this.count,
      };
      Ulogin(data).then((data) => {
      if(data.data){
        console.log("登录", data.data);
        console.log("解析", jwt_decode(data.data));
        let inf = jwt_decode(data.data);
        if (inf.power == 0) {
          this.$router.push("user/IndexCenter");
        } else if(inf.power == 1) {
          this.$router.push("/teacher");
        }else{
        this.$router.push("/admin");
        }
        let res = {
          token: data.data,
          pow: jwt_decode(data.data),
        };
        this.$store.commit("LOGIN", res);
      }else{
      this.$message.error('密码或账户错误');
      }
      });
    },
    reJump() {
      this.judge = "注册";
    },
    retJump() {
      this.judge = "重置";
    },
    loJump() {
      this.judge = "登录";
    },
  },
};
</script>

<style lang="less" scoped>
ul {
  list-style: none;
  margin-top: 20px;
  li {
    margin-bottom: 15px;
    color: white;
  }
}
.login {
  width: 100%;
  height: 100%;
  background-color: aliceblue;
}
img {
  width: 80px;
  height: 80px;
}
.main {
  width: 800px;
  height: 360px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.m-b {
  margin-bottom: 15px;
}
.elogin {
  display: inline-block;
  width: 300px;
  height: 360px;
  .signin-info {
    margin-left: 60px;
  }
}
h4 {
  color: white;
}
.rlogin {
  float: right;
  width: 320px;
  height: 360px;
}
.from {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 3px 0 rgb(12 12 12 / 3%);
  border-radius: 3px;
  padding: 30px;
}

.yang {
  width: 100%;
  display: flex;
  line-height: 50px;
  border: 1px solid #00000040;
}
.yang > div {
  width: 50%;
  text-align: center;
}
.shu {
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
  #re {
    float: right;
  }
}
#reset:hover {
  cursor: pointer;
  color: cornflowerblue;
}
#re:hover {
  cursor: pointer;
  color: cornflowerblue;
}
</style>
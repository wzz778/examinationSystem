<template>
  <div class="infork">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>个人信息</span>
      </div>
      <div class="text item">
        <div class="image">
          <!-- 加载动画 -->
          <!-- <div class="loader" v-show="ISshow">
            <div class="circle"></div>
            <div class="circle"></div>
          </div> -->
          <img :src="adatar ? adatar : require('../../../assets/myHead.jpg')" />
          <input type="file" accept="image/*" @change="fileChange" />
        </div>
        <p style="text-align: center">Student</p>
        <p>姓名:学生</p>
        <p>年级：一年级</p>
        <p>班级：1班<i class="el-icon-circle-plus" @click="open"></i></p>
        <p>注册时间：2022年12月5日</p>
      </div>
    </el-card>
  </div>
</template>

<script>
import { ZaddGrade, ZupdatePhoto } from "@/myAxios/user/zffAxios";
export default {
  naem: "NewsInfor",
  data() {
    return {
      adatar: "",
      ISshow: false,
    };
  },
  methods: {
    open() {
      this.$prompt("请输入班级邀请码", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^[a-zA-Z\d]{4}$/,
        inputErrorMessage: "邀请码格式不正确",
      })
        .then(({ value }) => {
          let data = {
            code: value,
          };
          ZaddGrade(data).then((result) => {
            console.log("加入班级", result);
            if (result.msg == "OK") {
              this.$message({
                type: "success",
                message: "加入班级成功",
              });
            } else {
              this.$message.error("邀请码错误");
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    },
    //头像选择
    fileChange(e) {
      var that = this;
      let file = e.target.files[0];
      let param = new FormData();
      param.append("photo", file);
      console.log("文件", param.get("photo"));
      ZupdatePhoto(param).then((result) => {
        console.log("更新用户头像", result);
        if (result.data == "已更新") {
          this.$message({
            type: "success",
            message: "头像更新成功",
          });
        }else{
        this.$message.error("头像更新失败");
        }
      });
      var reader = new FileReader();
      reader.onload = function (e) {
        console.log(e);
        that.adatar = e.target.result;
      };
      // setTimeout(function () {
      // this.ISshow:true
      // }, 4000);
      reader.readAsDataURL(file);
    },
  },
};
</script>

<style lang="less" scoped>
.infork {
  background: #fafafa;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
p {
  margin-bottom: 15px;
  text-align: left;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.box-card {
  width: 400px;
}
//图标
.el-icon-circle-plus {
  font-size: 27px;
  color: rgb(34, 123, 225);
  margin-left: 40px;
}
//用户头像
.image {
  position: relative;
  height: 120px;
  img {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: 0 auto;
    object-fit: cover;
    object-position: center;
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
  input {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: 0 auto;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    outline: none;
    opacity: 0;
    cursor: pointer;
    &:focus {
      box-shadow: none;
    }
  }
}
//加载动画
// .loader {
//   height: 50px;
//   width: 100px;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   right: 0;
//   left: 0;
//   margin: 0 auto;
//   z-index: 5;
//   transform-origin: bottom center;
//   animation: rotate 3s linear infinite;
// }
// .circle {
//   background-color: purple;
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   transform: scale(0);
//   animation: grow 1.5s linear infinite;
//   margin: -10px;
// }
// .circle:nth-child(2) {
//   background-color: palevioletred;
//   animation-delay: 0.75s;
// }

// @keyframes rotate {
//   to {
//     transform: rotate(360deg);
//   }
// }
// @keyframes grow {
//   50% {
//     transform: scale(1);
//   }
// }
</style>
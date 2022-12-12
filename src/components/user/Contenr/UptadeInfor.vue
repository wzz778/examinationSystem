<template>
  <div class="update">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="真实姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="form.age"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="form.sex" placehomanlder="请选择性别">
          <el-option label="男" value="man"></el-option>
          <el-option label="女" value="woman"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="出生日期">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="form.date"
            style="width: 100%"
          ></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="手机号码">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">更新</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { ZupdateUserInfo } from "@/myAxios/user/zffAxios";
export default {
  name: "UpatdeInfor",
  data() {
    return {
      form: {
        name: "学生",
        age: "18",
        sex: "男",
        date: "2022-12-05",
        phone: "15784527841",
      },
    };
  },
  methods: {
    onSubmit() {
      let reg = /^1[3-9]\d{9}$/;
      let num = /^(0?|-?[1-9]\d*)$/;
      console.log("信息", this.form.age);
      let k = "女";
      if (this.form.sex == "woman") {
        k = "女";
      } else {
        k = "男";
      }
      let data = {
        age: this.form.age,
        // birth: this.form.date,
        phone: this.form.phone,
        sex: k,
        email: "2794957189@qq.com",
      };
      if (this.phone && !reg.test(this.phone)) {
        this.$message.error("请输入正确的手机号");
      } else if (this.age && !num.test(this.age)) {
        this.$message.error("年龄为自然数");
      } else {
        ZupdateUserInfo(data).then((result) => {
          console.log("更新用户信息", result);
          if (result.data == "已更新") {
            this.$message({
              message: "信息更新成功",
              type: "success",
            });
          } else {
            this.$message.error("更新失败");
          }
        });
      }
    },
  },
};
</script>

<style>
.update {
  padding-top: 20px;
  background-color: #ffffff;
}
</style>
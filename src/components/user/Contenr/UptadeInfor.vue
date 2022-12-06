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
export default {
  name: "UpatdeInfor",
  data() {
    return {
      form: {
        name: "学生",
        age: "18",
        sex:'男',
        date: "2022-12-05",
        phone:'111111111'
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style>
.update{
padding-top: 20px;
  background-color: #ffffff;
}
</style>
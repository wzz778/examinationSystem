<template>
  <div class="infork">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>个人信息</span>
      </div>
      <div class="text item">
        <img src="http://localhost:8080/img/myHead.669d7963.jpg" />
        <p style="text-align:center">Student</p>
        <p>姓名:学生</p>
        <p>年级：一年级</p>
        <p>班级：1班</p>
        <p>注册时间：2022年12月5日</p>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  naem: "NewsInfor",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.infork{
margin-top: -40px;
background: #fafafa;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
}
p{
margin-top: 10px;
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

</style>
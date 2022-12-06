<template>
  <div class="inforp">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>试卷信息</span>
      </div>
      <el-form ref="create" :model="create" label-width="80px">
        <el-form-item label="学科：">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="单选题：">
          <el-slider v-model="create.single" :step="10" show-stops> </el-slider>
        </el-form-item>
        <el-form-item label="多选题：">
          <el-slider v-model="create.multi" :step="10" show-stops> </el-slider>
        </el-form-item>
        <el-form-item label="判断题：">
          <el-slider v-model="create.decide" :step="10" show-stops> </el-slider>
        </el-form-item>
        <el-form-item label="难度：">
          <el-slider v-model="create.diffculity" :step="10" show-stops>
          </el-slider>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="margin-left:60px;">创建</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "PaperInfor",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "语文",
        },
        {
          value: "选项2",
          label: "数学",
        },
        {
          value: "选项3",
          label: "英语",
        },
        {
          value: "选项4",
          label: "物理",
        },
        {
          value: "选项5",
          label: "化学",
        },
      ],
      value: "",
      create: {
        decide: "",
        single: "",
        multi: "",
        diffculity: "",
      },
    };
  },
};
</script>

<style lang="less" scoped>
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
.el-form-item{
margin-bottom: 10px;
}
</style>
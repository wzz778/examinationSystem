<template>
  <div class="mainr">
    <div class="error">
      <div class="error_top">
        <ul>
          <li>试卷学科：</li>
          <li>语文</li>
          <li>数学</li>
        </ul>
      </div>
      <div>
        <el-col v-for="(o, index) in 5" :key="o" :offset="index > 0 ? 2 : 0">
          <el-card :body-style="{ padding: '0' }">
            <div class="err_top">
              题型：<span>多选题</span>学科：<span>语文</span>
            </div>
            <div class="paperTitle">
              <el-form>
                <el-form-item label="">
                  <span>四大名著有什么？</span>
                </el-form-item>
                <el-form-item>
                  <span>A.红楼梦</span>
                  <span>B.水浒传</span>
                  <span>C.白楼梦</span>
                  <span>D.青楼梦</span>
                </el-form-item>
                <el-form-item label="答案：">
                  <span>A,B</span>
                </el-form-item>
                <el-form-item label="分数：">
                  <span>2.0</span>
                </el-form-item>
                <el-form-item label="难度：">
                  <span>一级</span>
                </el-form-item>
                <el-form-item label="解析：">
                  <span>比较简单，答案略</span>
                </el-form-item>
              </el-form>
            </div>
          </el-card>
        </el-col>
      </div>
      <div class="error_btn">
        <el-pagination
          :page-size="20"
          :pager-count="11"
          layout="prev, pager, next"
          :total="1000"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexErrorBook",
  data() {
    return {
      //页数尺寸
      pagesnum: "5",
    };
  },
};
</script>

<style  lang="less" scoped>
.error {
  width: 1000px;
  margin: 10px auto;
}
ul {
  border-radius: 4px;
  border: 1px solid #ebeef5;
  list-style: none;
  display: flex;
  padding-left: 20px;
  li {
    line-height: 40px;
    margin-right: 20px;
  }
}
.error_btn {
  text-align: center;
}
.el-form-item {
  margin-bottom: 0px;
}
.paperTitle {
  padding-left: 60px;
}
.err_top {
  line-height: 40px;
  background-color: darkorange;
  padding-left: 20px;
}
</style>

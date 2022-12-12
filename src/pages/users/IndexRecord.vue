<template>
  <div class="mainr">
    <div class="record">
      <div class="record_top">
        <ul>
          <li>试卷学科：</li>
          <li>语文</li>
          <li>数学</li>
        </ul>
      </div>
      <div>
        <el-col v-for="(o, index) in 5" :key="o" :offset="index > 0 ? 2 : 0">
          <el-card :body-style="{ margin: '10px', display: 'flex' }">
            <div class="paperTitle">
              <el-form>
                <el-form-item label="考试"> </el-form-item>
                <el-form-item label="发布时间：">
                  <span>{{ selectItem.releasetime }}</span>
                </el-form-item>
                <el-form-item label="提交时间：">
                  <span>{{ selectItem.usertime }}</span>
                </el-form-item>
                <el-form-item label="试卷状态：">
                  <span>{{ selectItem.paperstate }}</span>
                </el-form-item>
              </el-form>
            </div>
            <div class="paperInfor">
              <el-form>
                <el-form-item label="试卷类型：">
                  <span>{{ selectItem.papertype }}</span>
                </el-form-item>
                <el-form-item label="试卷学科：">
                  <span>{{ selectItem.papersubject }}</span>
                </el-form-item>
                <el-form-item label="题目数量：">
                  <span>{{ selectItem.questionCount }}</span>
                </el-form-item>
                <el-form-item label="试卷总分：">
                  <span>{{ selectItem.titlescore }}</span>
                </el-form-item>
              </el-form>
            </div>
            <div class="answerInfor">
              <el-form>
                <el-form-item label="正确题数：">
                  <span>{{ selectItem.questionCorrect }}</span>
                </el-form-item>
                <el-form-item label="自动批改：">
                  <span>{{ selectItem.systemScore }}</span>
                </el-form-item>
                <el-form-item label="最终得分：">
                  <span>{{ selectItem.userScore }}</span>
                </el-form-item>
                <el-form-item label="做题耗时：">
                  <span>{{ selectItem.doTime }}</span>
                </el-form-item>
              </el-form>
            </div>
            <div class="tag">
              <el-form>
                <el-form-item style="height:160px">
                </el-form-item>
                <el-form-item style="text-align:right;color:blue">
                  <span>{{ selectItem.handle }}</span>
                </el-form-item>
              </el-form>
            </div>
          </el-card>
        </el-col>
      </div>
      <div class="record_btn">
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
  name: "IndexRecord",
  data() {
    return {
      //页数尺寸
      pagesnum: "5",
      selectItem: {
        systemScore: "60",
        userScore: "60",
        doTime: "3分钟",
        questionCorrect: 6,
        questionCount: 10,
        usertime: "2022-12-06-11:02:10",
        paperstate: "待批改",
        papertype: "固定试卷",
        papersubject: "语文",
        titlescore: "100",
        releasetime: "2022-11-06-11:02:10",
        handle: "去批改",
      },
    };
  },
};
</script>

<style  lang="less" scoped>
.record {
  width: 1000px;
  margin: 10px auto;
  border-radius: 4px;
  border: 1px solid #ebeef5;
}
ul {
  list-style: none;
  display: flex;
  padding-left: 20px;
  li {
    line-height: 40px;
    margin-right: 20px;
  }
}
.record_btn {
  text-align: center;
}
.paperTitle {
  width: 300px;
}
.paperInfor,
.answerInfor {
  width: 270px;
}
.tag {
  width: 160px;
}
.el-form-item {
  margin-bottom: 0px;
}
</style>

<template>
  <div class="content">
    <div class="chooseType">
      <div class="choosePaperType">
        <div style="margin-top: 20px">
          试卷类型：
          <el-radio-group v-model="radio1" size="small">
            <el-radio
              :label="index"
              border
              v-for="(paperType, index) in paperTypes"
              :key="index"
              :value="pagerType"
              >{{ paperType }}</el-radio
            >
          </el-radio-group>
        </div>
      </div>
      <div class="chooseCourse">
        <div style="margin-top: 20px">
          科目：
          <el-radio-group v-model="radio2" size="mini">
            <el-radio
              v-for="(courseType, index) in courseTypes"
              :key="index"
              :label="index"
              border
              :value="courseType"
              >{{ courseType }}</el-radio
            >
          </el-radio-group>
        </div>
      </div>
    </div>
    <div class="paperItems">
      <el-card
        :body-style="{ padding: '0px' }"
        shadow="hover"
        class="paperBox"
        v-for="(arr, index) in 5"
        :key="index"
      >
        <div style="padding: 14px">
          <div class="paperInfo">
            <span class="paperTitle">试卷一</span>
            <span>学科：语文</span>
            <span>题数：3</span>
            <span>总分：100</span>
            <span>时长：120分钟</span>
            <span>开始时间：2022-12-5 00:00:00</span>
            <span>截止时间：2022-12-6 00:00:00</span>
          </div>
          <div class="bottom clearfix">
            <el-button type="text" class="button">去答题</el-button>
          </div>
        </div>
      </el-card>
    </div>
    <div class="pagesBox">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { RadioGroup, Radio, Card, Button,Pagination } from "element-ui";
export default {
  name: "IndexPaper",
  data() {
    return {
      radio1: 0,
      radio2: "",
      paperTypes: ["固定试卷", "时段试卷", "班级试卷"],
      courseTypes: ["语文", "数学", "英语"],
      
    };
  },
  components: {
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio,
    [Card.name]: Card,
    [Button.name]: Button,
    [Pagination.name]:Pagination
  },
  methods:{
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
  }
};
</script>

<style lang="less" scoped>
.content {
  display: inline-block;
  width: 90%;
  margin-left: 5%;
}
.chooseType {
  border-bottom: 1px solid rgb(191, 190, 190);
  padding-bottom: 20px;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.taskCard {
  display: flex;
  justify-content: center;
  margin: 30px 0;
}
.box-card {
  width: 90%;
  //   max-width: 1400px;
}
.taskTitle {
  font-size: 20px;
  font-weight: 700;
  color: #666;
}

//试卷信息
.paperInfo {
  display: flex;
  flex-direction: column;
  font-size: 15px;
  color: #999;
  span {
    margin: 5px 0;
  }
  .paperTitle {
    font-size: 18px;
    color: #666;
  }
}
.paperItems {
  display: grid;
  grid-template-columns: repeat(auto-fill, 320px);
  gap: 15px;
}
.paperBox {
  width: 320px;
  margin-top: 20px;
}

//分页
.pagesBox{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 50px;
}
</style>
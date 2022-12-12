<template>
  <div class="content">
    <div class="chooseType">
      <div class="chooseCourse">
        <div style="margin-top: 20px">
          科目：
          <el-radio-group v-model="radio" size="small">
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
        v-for="(arr, index) in 5"
        :key="index"
        :body-style="{ padding: '0px' }"
        shadow="hover"
        class="videoClassBox"
      >
        <span class="image"></span>
        <div style="padding: 14px">
          <div class="videoClassInfo">
            <span>学科：语文</span>
            <span>视频时长：1分钟</span>
            <span>答题时长：120分钟</span>
            <span>题数：3</span>
            <span>总分：100</span>
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
        :current-page="currentPage"
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
import {
  Card,
  Collapse,
  CollapseItem,
  Row,
  Col,
  Button,
  Radio,
  RadioGroup,
  Pagination,
} from "element-ui";
export default {
  name: "IndexVideoClass",
  components: {
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem,
    [Card.name]: Card,
    [Row.name]: Row,
    [Col.name]: Col,
    [Button.name]: Button,
    [Radio.name]: Radio,
    [RadioGroup.name]: RadioGroup,
    [Pagination.name]: Pagination,
  },
  data() {
    return {
      arr: [1, 2, 3, 4, 5],
      radio: 0,
      courseTypes: ["语文", "数学", "英语"],
      currentPage:1
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  width: 90%;
  margin-left: 5%;
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
  width: 90%;
  margin-left: 5%;
  margin-top: 10px;
  height: 160px;
  display: block;
  background-image: url("https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
.videoClassBox {
  width: 320px;
  margin-top: 20px;
}
.paperItems {
  display: grid;
  grid-template-columns: repeat(auto-fill, 320px);
  gap: 15px;
}

.videoClassInfo {
  display: flex;
  flex-direction: column;
  font-size: 15px;
  color: #999;
}

//分页
.pagesBox{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 50px;
}
</style>
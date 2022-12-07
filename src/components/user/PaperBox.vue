<template>
  <div class="taskCard">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="taskTitle">我的试卷</span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
      </div>
      <div class="text item">
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
              <router-link to="/doPaper"><el-button type="text" class="button">去答题</el-button></router-link>
            </div>
          </div>
        </el-card>
      </div>
    </el-card>
  </div>
</template>

<script>
import { Card, Collapse, CollapseItem, Row, Col, Button } from "element-ui";
export default {
  name: "PaperBox",
  components: {
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem,
    [Card.name]: Card,
    [Row.name]: Row,
    [Col.name]: Col,
    [Button.name]: Button,
  },
  data() {
    return {
      arr: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
  },
};
</script>

<style lang="less" scoped>
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
.item {
  display: grid;
  grid-template-columns: repeat(auto-fill,320px);
  gap: 15px;
}
.paperBox {
  width: 320px;
  margin-top: 20px;
}
</style>
<template>
  <div class="taskCard">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="taskTitle">视频课堂</span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
      </div>
      <div class="text item">
        <!-- <el-row>
          <el-col
            :span="8"
            v-for="(o, index) in 2"
            :key="o"
            :offset="index > 0 ? 2 : 0"
          > -->
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
              <time class="time">{{ currentDate }}</time>
              <router-link to="/doPaper"><el-button type="text" class="button">去答题</el-button></router-link>
            </div>
          </div>
        </el-card>
        <!-- </el-col>
        </el-row> -->
      </div>
    </el-card>
  </div>
</template>

<script>
import { Card, Collapse, CollapseItem, Row, Col, Button } from "element-ui";
export default {
  name: " VideoClassBox",
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
  width: 90%;
  margin-left: 5%;
  margin-top: 10px;
  height: 200px;
  display: block;
  background-image: url("https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
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
.videoClassBox {
  width: 340px;
  margin-top: 20px;
}
.item {
  display: grid;
  grid-template-columns: repeat(auto-fill, 340px);
  gap: 15px;
}

.videoClassInfo{
    display: flex;
    flex-direction: column;
    font-size: 15px;
    color: #999;
}
</style>
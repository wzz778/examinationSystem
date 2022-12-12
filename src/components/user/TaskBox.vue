<template>
<div class="taskCard">
    <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span class="taskTitle">我的任务</span>
      <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
    </div>
    <div class="text item">
      <el-collapse  @change="handleChange">
        <el-collapse-item title="任务一" name="1">
          <div class="taskItem">
            <span class="itemName" @click="logFun">试卷一</span>
            <div class="btns">
              <el-button type="text" style="color:rgb(103,194,58)">完成</el-button>
              <router-link to="/readPaper"><el-button type="text" style="margin-left:10px">查看试卷</el-button></router-link>
            </div>
          </div>
          <div class="taskItem">
            <span class="itemName">试卷一</span>
            <div class="btns">
              <el-button type="text" style="color:rgb(230,162,60)">待批改</el-button>
              <router-link to="/correctPaper"><el-button type="text" style="margin-left:10px">去批改</el-button></router-link>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="任务二" name="2">
          <div class="taskItem">
            <span class="itemName">试卷一</span>
            <div class="btns">
              <el-button type="text" style="color:rgb(103,194,58)">完成</el-button>
              <router-link to="/readPaper"><el-button type="text" style="margin-left:10px">查看试卷</el-button></router-link>
            </div>
          </div>
          <div class="taskItem">
            <span class="itemName">试卷一</span>
            <div class="btns">
              <el-button type="text" style="color:rgb(230,162,60)">待批改</el-button>
              <router-link to="/correctPaper"><el-button type="text" style="margin-left:10px">去批改</el-button></router-link>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="任务二" name="3">
         <div class="taskItem">
            <span class="itemName">试卷一</span>
            <div class="btns">
              <el-button type="text" style="color:rgb(103,194,58)">完成</el-button>
              <router-link to="/readPaper"><el-button type="text" style="margin-left:10px">查看试卷</el-button></router-link>
            </div>
          </div>
          <div class="taskItem">
            <span class="itemName">试卷一</span>
            <div class="btns">
              <el-button type="text" style="color:rgb(230,162,60)">待批改</el-button>
              <router-link to="/correctPaper"><el-button type="text" style="margin-left:10px">去批改</el-button></router-link>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </el-card>
</div>
</template>

<script>
import {getAllSubject} from '../../myAxios/user/yxyAxios'
import { Card, Collapse, CollapseItem,Button } from "element-ui";
export default {
  name: "TaskBox",
  components: {
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem,
    [Card.name]: Card,
    [Button.name]:Button
  },
  data() {
    return {
      // activeNames: ['1']
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    async logFun(){
        let data={
          beginIndex:1,
          size:10
        }
        console.log(await getAllSubject(data))
      }
  }
};
</script>

<style lang="less" scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.taskCard{
    display: flex;
    justify-content: center;
    margin: 30px 0;
}
.box-card {
  width: 90%;
//   max-width: 1400px;
}
.taskTitle{
    font-size:20px;
    font-weight: 700;
    color: #666;
}
.taskItem{
  display: flex;
  justify-content: space-between;
}
</style>
<template>
  <div>
    <button @click="test">测试</button>
    <!-- 顶部 -->
    <el-row>
      <el-col :span="5">
        <el-card>
          <div class="cardItem">
            <div class="iconSty">
              <i class="el-icon-user-solid"></i>
            </div>
            <div class="dateInfo">
              <div class="card-panel-text">班级总数</div>
              <span>5</span>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card>
          <div class="cardItem">
            <div class="iconSty">
              <i class="el-icon-user-solid"></i>
            </div>
            <div class="dateInfo">
              <div class="card-panel-text">班级总人数</div>
              <span>5</span>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card>
          <div class="cardItem">
            <div class="iconSty">
              <i class="el-icon-user-solid"></i>
            </div>
            <div class="dateInfo">
              <div class="card-panel-text">试卷总数</div>
              <span>5</span>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card>
          <div class="cardItem">
            <div class="iconSty">
              <i class="el-icon-user-solid"></i>
            </div>
            <div class="dateInfo">
              <div class="card-panel-text">题目</div>
              <span>5</span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="charSty">
          <div id="classPeople" style="width: 600px; height: 400px"></div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="charSty">
          <div id="drawExamination" style="width: 600px; height: 400px"></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from "echarts/core";
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart, PieChart } from "echarts/charts";
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
} from "echarts/components";
// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from "echarts/features";
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from "echarts/renderers";
import { Card, Row, Col } from "element-ui";

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  PieChart,
]);

// 引入接口
import { Text } from "@/myAxios/teacher/index.js";
export default {
  name: "graphicPresentation",
  components: {
    [Card.name]: Card,
    [Row.name]: Row,
    [Col.name]: Col,
  },
  methods: {
    drawClassPeople() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("classPeople"));
      // 绘制图表
      myChart.setOption({
        tooltip: {},
        title: {
          text: "班级试卷分布",
        },
        series: [
          {
            type: "pie",
            data: [
              {
                value: 335,
                name: "直接访问",
              },
              {
                value: 234,
                name: "联盟广告",
              },
              {
                value: 1548,
                name: "搜索引擎",
              },
            ],
          },
        ],
      });
    },
    drawExamination() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("drawExamination"));
      // 绘制图表
      myChart.setOption({
        tooltip: {},
        title: {
          text: "班级人数分布",
        },
        series: [
          {
            type: "pie",
            data: [
              {
                value: 335,
                name: "直接访问",
              },
              {
                value: 234,
                name: "联盟广告",
              },
              {
                value: 1548,
                name: "搜索引擎",
              },
            ],
          },
        ],
      });
    },
    test() {
      this.$myRichText({})
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.drawClassPeople();
    this.drawExamination();
    Text()
      .then((result) => {
        console.log("接口测试", result);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.el-col-5 {
  margin-left: 30px;
}

.cardItem {
  display: flex;
}

.iconSty {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.iconSty > i {
  font-size: 30px;
}

.el-col-5:hover > div > div > div > div > i {
  color: red;
}

.dateInfo {
  color: #666;
  font-size: 20px;
}

.charSty {
  margin-top: 20px;
  margin-right: 20px;
  padding: 15px;
  background-color: white;
}
</style>
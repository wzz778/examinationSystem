<template>
  <div class="news">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>消息中心</span>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        <el-collapse accordion>
          <el-collapse-item>
            <template slot="title">
              <span>一致性 Consistency {{ o }}</span>
              <el-button style="margin-left:640px;" type="text"
                >操作按钮</el-button
              >
            </template>
            <div>
              与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
            </div>
            <div>
              在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-card>
  </div>
</template>

<script>
import { Collapse, CollapseItem } from "element-ui";
export default {
  name: "NewsCenter",
  components: {
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem,
  },
};
</script>

<style>
.text {
  font-size: 14px;
}

/* .item {
  margin-bottom: 18px;
} */

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 950px;
  margin: 40px auto;
}
</style>
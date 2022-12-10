<template>
  <div class="trends">
    <div class="block">
      <el-timeline v-for="item in tableData" :key="item.id">
        <el-timeline-item v-bind:timestamp="item.createTime" placement="top">
          <el-card>
            <h4>{{item.createTime}}</h4>
            <p>{{item.log}}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
import { ZgetLogs } from "@/myAxios/user/zffAxios";
export default {
  name: "NewsTrends",
  data() {
    return {
      tableData: [],
    };
  },
  mounted: function () {
    this.Getlogs();
  },
  methods: {
    Getlogs() {
      ZgetLogs().then((result) => {
        console.log("取出日志", result);
        if (result.msg == "OK") {
          this.tableData = result.data;
        } else {
          this.$message.error("加载用户动态失败");
        }
      });
    },
  },
};
</script>

<style  lang="less" scoped>
.trends {
  padding-top: 20px;
  background-color: #ffffff;
}
</style>
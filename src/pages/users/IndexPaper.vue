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
              :value="courseType.subjectName"
              >{{ courseType.subjectName }}</el-radio
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
        v-for="(p, index) in paperList"
        :key="index"
      >
        <div style="padding: 14px">
          <div class="paperInfo">
            <span class="paperTitle">{{ p.examName }}</span>
            <span>学科：语文</span>
            <span>题数：{{ p.paperContentId.length }}</span>
            <span>总分：{{ p.paperScore }}</span>
            <span>时长：{{ p.suggestTime }}</span>
            <span>开始时间：{{ p.limitStartTime }}</span>
            <span>截止时间：{{ p.limitEndTime }}</span>
          </div>
          <div class="bottom clearfix">
            <router-link :to="{ path: '/doPaper', query: { pid: p.id } }"
              ><el-button type="text" class="button"
                >去答题</el-button
              ></router-link
            >
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
        :total="pageInfo.total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getMyCourse, getPapers } from "@/myAxios/user/yxyAxios";
import { RadioGroup, Radio, Card, Button, Pagination } from "element-ui";
export default {
  name: "IndexPaper",
  data() {
    return {
      radio1: 0,
      radio2: "",
      paperTypes: ["固定试卷", "时段试卷", "班级试卷"],
      courseTypes: [],
      pagerType: "",
      courseType: "",
      currentPage: 1,
      paperList: [],
      pageInfo:{}
    };
  },
  components: {
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio,
    [Card.name]: Card,
    [Button.name]: Button,
    [Pagination.name]: Pagination,
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
  mounted() {
    let data = {
      beginIndex: 1,
      level: "一年级",
      size: 10,
    };
    getMyCourse(data).then((res) => {
      console.log(res);
      this.courseTypes = res.data.records;
    });
    let pagerData = {
      beginIndex: 1,
      gradeClass: 1,
      size: 8,
    };
    getPapers(pagerData).then((res) => {
      this.paperList = res.data.records;
      this.pageInfo.pages=res.data.pages;
      this.pageInfo.current=res.data.current;
      this.pageInfo.total=res.data.total
      console.log(res.data)
    });
  },
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
.pagesBox {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
</style>
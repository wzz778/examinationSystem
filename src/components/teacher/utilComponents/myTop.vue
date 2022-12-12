<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="5" v-if="inputInfoObj">
        <el-form label-width="80px">
          <el-form-item :label="inputInfoObj.showName">
            <el-input
              v-model="value1"
              clearable
              placeholder="请选择"
            ></el-input>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col
        :span="5"
        v-if="seletcInfoObjOne && seletcInfoObjOne.showName == '学科'"
      >
        <el-form label-width="80px">
          <el-form-item label="年级">
            <el-select v-model="value" clearable placeholder="请选择">
              <el-option
                v-for="(item,index) in gradeArr"
                :key="item"
                :label="item"
                :value="index+1"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="5" v-if="seletcInfoObjOne">
        <el-form label-width="80px">
          <el-form-item :label="seletcInfoObjOne.showName">
            <template v-if="seletcInfoObjOne.showName == '学科'">
              <el-select v-model="value2" clearable :placeholder="getPl">
                <el-option
                  v-for="item in getOptions"
                  :key="item.id"
                  :label="item.subjectName"
                  :value="item.id"
                >
                </el-option>
              </el-select>
            </template>
            <template v-else>
              <el-select v-model="value2" clearable placeholder="请选择">
                <el-option
                  v-for="item in options1"
                  :key="item.id"
                  :label="item.grade"
                  :value="item.id"
                >
                </el-option>
              </el-select>
            </template>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="5">
        <el-form label-width="80px" v-if="seletcInfoObjTwo">
          <el-form-item :label="seletcInfoObjTwo.showName">
            <el-select v-model="value3" clearable placeholder="请选择">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="5">
        <el-form label-width="80px">
          <el-button type="primary" @click="sureSerach">查询</el-button>
          <template v-if="buttonInfo">
            <!-- 添加,buttonInfo的type是true的话是添加否则是导入 -->
            <el-button
              v-if="buttonInfo.type"
              type="primary"
              @click="addExamination"
              >添加</el-button
            >
            <el-dropdown v-if="!buttonInfo.type">
              <el-button type="primary">
                导入<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-button type="primary" @click="addExamination"
                  >模板导入</el-button
                >
                <el-button type="primary" @click="addExamination"
                  >模板导出</el-button
                >
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { Col, Row, Dropdown, DropdownMenu, DropdownItem } from "element-ui";
// 引入访问的接口
import { getAllGrade, getAllSubject } from "@/myAxios/teacher/index";
export default {
  name: "myTop",
  /* 
  input对象
      是否显现,显现的名字
  select对象
      每个是否显现,显现的名字，显现的是啥，请求的接口名字
  */
  props: [
    "inputInfoObj",
    "selectInfoObj",
    "searchFn",
    "seletcInfoObjOne",
    "seletcInfoObjTwo",
    "buttonInfo",
  ],
  components: {
    [Col.name]: Col,
    [Row.name]: Row,
    [Option.name]: Option,
    [Dropdown.name]: Dropdown,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem,
  },
  data() {
    return {
      value: "",
      value1: "",
      value2: "",
      value3: "",
      options1: [],
      options2: [],
      topicArr: [
        {
          value: "1",
          label: "单选题",
        },
        {
          value: "2",
          label: "多选题",
        },
        {
          value: "3",
          label: "判断题",
        },
        {
          value: "4",
          label: "填空题",
        },
        {
          value: "5",
          label: "简答题",
        },
      ],
      gradeArr: [
        "一年级",
        "二年级",
        "三年级",
        "四年级",
        "五年级",
        "六年级",
        "初一",
        "初二",
        "初三",
        "高一",
        "高二",
        "高三",
      ],
    };
  },
  computed: {
    getPl() {
      return this.seletcInfoObjOne.showName == "学科"
        ? "请先选择年级"
        : "请选择";
    },
    getOptions() {
      if (this.value == "") {
        return [];
      }
      return this.options1.filter((item) => {
        return item.levelName == this.value;
      });
    },
  },
  methods: {
    sureSerach() {
      let tempObj = {};
      //   判断是否有值
      if (this.inputInfoObj && this.value1 != "") {
        tempObj[this.inputInfoObj.transferName] = this.value1;
      }
      if (this.seletcInfoObjOne) {
        if (this.value2 != "") {
          tempObj[this.seletcInfoObjOne.transferName] = this.value2;
        }
        if (this.seletcInfoObjOne.showName == "学科" && this.value != "") {
          tempObj["gradeClass"] = this.value;
        }
      }
      if (this.seletcInfoObjTwo && this.value3 != "") {
        tempObj[this.seletcInfoObjTwo.transferName] = this.value3;
      }
      // 调用传递的函数
      this.searchFn(tempObj);
    },
    getClass() {
      getAllGrade().then((result) => {
        console.log("获取所有班级", result);
        this.options1 = result.data.data.records;
      });
    },
    getSubjectFn() {
      getAllSubject({}).then((result) => {
        this.options1 = result.data.data;
      });
    },
    getTopic() {
      this.options2 = this.topicArr;
    },
    getAll() {
      if (this.seletcInfoObjOne) {
        this[this.seletcInfoObjOne.fnType]();
      }
      if (this.seletcInfoObjTwo) {
        this[this.seletcInfoObjTwo.fnType]();
      }
    },
    addExamination() {
      this.$router.push({
        path: "/",
      });
    },
  },
  mounted() {
    this.getAll();
  },
};
</script>

<style scoped>
.el-dropdown-menu {
  padding: 20px;
}

.el-dropdown {
  margin-left: 20px;
}
</style>
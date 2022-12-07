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
      <el-col :span="5" v-if="seletcInfoObjOne">
        <el-form label-width="80px">
          <el-form-item :label="seletcInfoObjOne.showName">
            <el-select v-model="value2" clearable placeholder="请选择">
              <el-option
                v-for="item in options1"
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
import {
  Input,
  FormItem,
  Form,
  Col,
  Row,
  Select,
  Option,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from "element-ui";
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
    [Input.name]: Input,
    [FormItem.name]: FormItem,
    [Form.name]: Form,
    [Col.name]: Col,
    [Row.name]: Row,
    [Select.name]: Select,
    [Option.name]: Option,
    [Dropdown.name]: Dropdown,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem,
  },
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
      options1: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      options2: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      topicArr: [
        {
          value: "选项1",
          label: "单选题",
        },
        {
          value: "选项2",
          label: "多选题",
        },
        {
          value: "选项3",
          label: "判断题",
        },
        {
          value: "选项4",
          label: "填空题",
        },
        {
          value: "选项5",
          label: "简答题",
        },
      ],
    };
  },
  methods: {
    sureSerach() {
      let tempObj = {};
      //   判断是否有值
      if (this.inputInfoObj) {
        tempObj[this.inputInfoObj.transferName] = this.value1;
      }
      if (this.seletcInfoObjOne) {
        tempObj[this.seletcInfoObjOne.transferName] = this.value2;
      }
      if (this.seletcInfoObjTwo) {
        tempObj[this.seletcInfoObjTwo.transferName] = this.value3;
      }
      // 调用传递的函数
      this.searchFn(tempObj);
    },
    getClass() {
      console.log("class");
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
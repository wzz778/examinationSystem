<template>
  <div id="layout">
    <div id="nav" class="nav1">
      <el-menu
        :default-active="$router.path"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        router
      >
        <el-menu-item index="/teacher/graphicPresentation">
          <i class="el-icon-menu"></i>
          <span slot="title">教师端</span>
        </el-menu-item>
        <el-menu-item index="/teacher/graphicPresentation">
          <i class="el-icon-s-home"></i>
          <span slot="title">主页</span>
        </el-menu-item>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-s-custom"></i>
            <span slot="title">用户管理</span>
          </template>
          <el-menu-item index="/teacher/studentList">学生列表</el-menu-item>
          <el-menu-item index="/teacher/adminStudentList"
            >管理员学生列表</el-menu-item
          >
          <el-menu-item index="/teacher/teacherList">教师列表</el-menu-item>
          <el-menu-item index="/teacher/adminList">管理员列表</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-s-grid"></i>
            <span slot="title">班级管理</span>
          </template>
          <el-menu-item index="/teacher/classList">班级列表</el-menu-item>
          <el-menu-item index="/teacher/classCreat">班级创建</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-s-order"></i>
            <span slot="title">卷库管理</span>
          </template>
          <el-menu-item index="/teacher/examinationList">试卷列表</el-menu-item>
          <el-menu-item index="/teacher/testCreat">试卷创编</el-menu-item>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">
            <i class="el-icon-c-scale-to-original"></i>
            <span slot="title">题库管理</span>
          </template>
          <el-menu-item index="/teacher/questionList">题目列表</el-menu-item>
          <el-menu-item index="/teacher/singleChoice">单选题创编</el-menu-item>
          <el-menu-item index="/teacher/multiSelect">多选题创编</el-menu-item>
          <el-menu-item index="/teacher/judgmentQuestion"
            >判断题创编</el-menu-item
          >
          <el-menu-item index="/teacher/gapFilling">填空题创编</el-menu-item>
          <el-menu-item index="/teacher/shortAnswer">简答题创编</el-menu-item>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title">
            <i class="el-icon-chat-line-square"></i>
            <span slot="title">答卷管理</span>
          </template>
          <el-menu-item index="/teacher/correctingList">批改列表</el-menu-item>
          <el-menu-item index="/teacher/examinationFinish"
            >试卷完成</el-menu-item
          >
        </el-submenu>
        <el-submenu index="8">
          <template slot="title">
            <i class="el-icon-s-data"></i>
            <span slot="title">成绩分析</span>
          </template>
          <el-menu-item index="/teacher/analysisList">试卷列表</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div id="head" :class="rehead">
      <div class="headtop">
        <button
          type="button"
          id="sidebarCollapse"
          class="sidebar_toggle"
          @click="isCollapse = !isCollapse"
        >
          <i :class="refold"></i>
        </button>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          router
        >
          <el-submenu index="1">
            <template slot="title">teacher</template>
            <el-menu-item index="2-1">个人信息</el-menu-item>
            <el-menu-item index="/teacher/graphicPresentation">主页</el-menu-item>
            <el-menu-item index="2-3">退出</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <div class="headbottom">
        <el-tabs
          v-model="editableTabsValue"
          type="card"
          @tab-remove="removeTab"
          @tab-click="tabClick"
        >
          <el-tab-pane
            v-for="item in editableTabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
            closable
          >
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div id="body" :class="rebody">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import {
  Submenu,
  Menu,
  RadioGroup,
  RadioButton,
  MenuItem,
  MenuItemGroup,
  Breadcrumb,
  BreadcrumbItem,
  Tabs,
  TabPane,
} from "element-ui";
export default {
  name: "AdminLayout",
  components: {
    [Submenu.name]: Submenu,
    [Menu.name]: Menu,
    [MenuItem.name]: MenuItem,
    [MenuItemGroup.name]: MenuItemGroup,
    [RadioGroup.name]: RadioGroup,
    [RadioButton.name]: RadioButton,
    [Breadcrumb.name]: Breadcrumb,
    [BreadcrumbItem.name]: BreadcrumbItem,
    [Tabs.name]: Tabs,
    [TabPane.name]: TabPane,
  },
  data() {
    return {
      isCollapse: false,
      activeIndex: "1",
      rebody: "body1",
      rehead: "head1",
      refold: "el-icon-s-fold",
      tabIndex: 2,
    };
  },
  methods: {
    tabClick(tab) {
      let path = tab.name;
      this.$store.commit("teacher/setTabName", path);
      this.$router.push({ path: path });
    },
    removeTab(targetName) {
      if (targetName === "/teacher/graphicPresentation") {
        return;
      }
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      let tab1;
      tab1 = tabs.filter((tab) => tab.name !== targetName);
      this.$store.commit("teacher/addTab", tab1);
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
        this.$store.commit("teacher/setTabName", activeName);
        this.$router.push({ path: activeName });
      }
    },
  },
  watch: {
    isCollapse(newValue) {
      if (newValue) {
        this.rebody = "body2";
        (this.rehead = "head2"), (this.refold = "el-icon-s-unfold");
      } else {
        this.rebody = "body1";
        this.rehead = "head1";
        this.refold = "el-icon-s-fold";
      }
    },
    $route(to) {
      let arr = new Array();
      for (let i of to.matched) {
        if (i.meta.title != undefined) {
          arr.push(i.meta.title);
        }
      }
      this.alltitle = arr;
      let flag = false;
      let tabs = this.editableTabs;
      let route = this.editableTabsValue;
      for (let i of tabs) {
        if (i.name === to.path) {
          flag = true;
          //设置当前tab为当前路由
          this.$store.commit("teacher/setTabName", to.path);
          break;
        }
      }
      if (!flag) {
        let data = {
          title: to.meta.title,
          name: to.path,
        };
        tabs.push(data);
        route = to.path;
        //设置tab数组
        this.$store.commit("teacher/addTab", tabs);
        this.$store.commit("teacher/setTabName", route);
      }
    },
  },
  computed: {
    // /存放所有tab的数组
    editableTabs() {
      let tabs;
      let data = this.$store.state.teacher.editableTabs;
      tabs = typeof data === "string" ? JSON.parse(data) : data;
      return tabs;
    },
    //当前tab 初始默认为首页(/home)
    editableTabsValue: {
      get() {
        return this.$store.state.teacher.editableTabsValue;
      },
      set() {},
    },
  },
};
</script>
<style  lang="less">
  #nav {
    height: 100vh;
    background-color: white;
    color: #fff;
    transition: all 0.3s;
    position: fixed;
    z-index: 101;
    // overflow:scroll;
    overflow: hidden;
    .el-menu-vertical-demo{
      max-height: 100vh;
      overflow-y: scroll;
      width: 200px;
        &::-webkit-scrollbar {
            width: 4px;    
        }
        &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            box-shadow: inset 0 0 5px rgba(0,0,0,0.1);
            background: rgba(0,0,0,0.01);
        }
        &::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px rgba(0,0,0,0.1);
            border-radius: 0;
            background: rgba(0,0,0,0.01);
        }
    }
  }
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
#head {
  height: 80px;
  z-index: 1;
  background-color: white;
  border-bottom: solid 1px #e6e6e6;
  position: fixed;
  top: 0;
  width: 100%;
  color: white;
  transition: all 0.3s;
  .headtop {
    width: 100%;
    height: 45px;
    border-bottom: solid 1px #e6e6e6;
    .el-menu-demo {
      position: absolute;
      right: 0;
      cursor: pointer;
      float: right;
      height: 40px;
      color: white;
      width: 100px;
      border: none;
    }
    #sidebarCollapse {
      border: none;
      padding: 2px 30px 2px;
      height: 100%;
      font-size: 21px;
      background-color: #ff5722;
      cursor: pointer;
      float: left;
      color: white;
    }
  }
  .headbottom {
    width: 100%;
    height: 33px;
  }
}
.head1 {
  width: 100%;
  padding-left: 200px;
}
.head2 {
  width: 100%;
  padding-left: 60px;
}
#body {
  width: 100%;
  min-height: 100vh;
  background-color: #f8f8f8;
  transition: all 0.3s;
  #begin-main {
    width: 100%;
    height: 600px;
    background-color: wheat;
  }
}
.body1 {
  padding: 90px 10px 10px 210px;
}
.body2 {
  padding: 90px 10px 10px 70px;
}

.el-tabs__item {
  height: 34px;
  line-height: 34px;
}

.el-tabs__new-tab {
  display: none;
}
</style>
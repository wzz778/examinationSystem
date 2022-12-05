<template>
  <div id="layout">
    <div id="nav" class="nav1">
      <el-menu
        :default-active="nowhttp"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        router
      >
        <el-menu-item index="/admin/index">
          <i class="el-icon-menu"></i>
          <span slot="title">管理端</span>
        </el-menu-item>
        <el-menu-item index="/admin/index">
          <i class="el-icon-s-home"></i>
          <span slot="title">主页</span>
        </el-menu-item>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">用户管理</span>
          </template>
          <el-menu-item index="3-1">学生列表</el-menu-item>
          <el-menu-item index="3-2">教师列表</el-menu-item>
          <el-menu-item index="3-3">管理员列表</el-menu-item>
        </el-submenu>
        <el-submenu index="/admin/subject">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">学科管理</span>
          </template>
          <el-menu-item index="/admin/subject/list">学科列表</el-menu-item>
          <el-menu-item index="/admin/subject/edit">学科创编</el-menu-item>
        </el-submenu>
        <el-submenu index="/admin/knowledge">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">知识点管理</span>
          </template>
          <el-menu-item index="/admin/knowledge/list">知识点列表</el-menu-item>
          <el-menu-item index="/admin/knowledge/edit">知识点创编</el-menu-item>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">卷库管理</span>
          </template>
          <el-menu-item index="/admin/">卷库列表</el-menu-item>
          <el-menu-item index="4-2">卷库创编</el-menu-item>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">题库管理</span>
          </template>
          <el-menu-item index="/admin/">题库列表</el-menu-item>
          <el-menu-item index="4-2">选题创编</el-menu-item>
        </el-submenu>
        <el-submenu index="/admin/task">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">任务管理</span>
          </template>
          <el-menu-item index="/admin/task/list">任务列表</el-menu-item>
          <el-menu-item index="/admin/task/edit">任务创编</el-menu-item>
        </el-submenu>
        <el-submenu index="/admin/video">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">视频管理</span>
          </template>
          <el-menu-item index="/admin/video/list">视频列表</el-menu-item>
          <el-menu-item index="/admin/video/edit">视频创编</el-menu-item>
        </el-submenu>
        <el-submenu index="10">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">答卷管理</span>
          </template>
          <el-menu-item index="/admin/">批改列表</el-menu-item>
          <el-menu-item index="4-2">试卷完成</el-menu-item>
        </el-submenu>
        <el-submenu index="/admin/message">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">消息中心</span>
          </template>
          <el-menu-item index="/admin/message/list">消息列表</el-menu-item>
          <el-menu-item index="/admin/message/edit">消息发送</el-menu-item>
        </el-submenu>
        <el-menu-item index="/admin/journal/list">
          <i class="el-icon-document"></i>
          <span slot="title">日志中心</span>
        </el-menu-item>
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
          @select="handleSelect"
          router
        >
          <el-submenu index="1">
            <template slot="title">admin</template>
            <el-menu-item index="2-1">个人信息</el-menu-item>
            <el-menu-item index="2-2">主页</el-menu-item>
            <el-menu-item index="2-3">退出</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <div class="headbottom"></div>
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
  },
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    };
    return {
      isCollapse: false,
      activeIndex: "1",
      tableData: Array(20).fill(item),
      rebody: "body1",
      rehead: "head1",
      refold: "el-icon-s-fold",
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  watch: {
    isCollapse(newValue) {
      console.log(newValue);
      if (newValue) {
        this.rebody = "body2";
        (this.rehead = "head2"), (this.refold = "el-icon-s-unfold");
      } else {
        this.rebody = "body1";
        this.rehead = "head1";
        this.refold = "el-icon-s-fold";
      }
    },
  },
  computed: {
    nowhttp() {
      var url = window.location.href;
      return url.split("#")[1];
    },
  },
};
</script>
<style  lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100vh;
  position: fixed;
  z-index: 10;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
#nav {
  min-height: 100vh;
  background-color: white;
  color: #fff;
  transition: all 0.3s;
  position: fixed;
  z-index: 3;
}
#head {
  height: 80px;
  z-index: 0;
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
</style>
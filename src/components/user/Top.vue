<template>
<div>
  <div id="top">
    <el-row :gutter="20">
      <el-col :span="4" class="sideBox"
        ><div class="grid-content bg-purple side">图标</div></el-col
      >
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
          >
            <el-menu-item index="1"
              ><router-link to="/user/IndexCenter">首页</router-link></el-menu-item
            >
            <el-menu-item index="2"
              ><router-link to="/user/IndexPaper">试卷中心</router-link></el-menu-item
            >
            <el-menu-item index="3"
              ><router-link  to="/user/IndexVideoClass">视频课堂</router-link></el-menu-item
            >
            <el-menu-item index="4"
              ><router-link  to="/user/IndexTraining">智能训练</router-link></el-menu-item
            >
            <el-menu-item index="5"
              ><router-link  to="/user/IndexRecord">考试记录</router-link></el-menu-item
            >
            <el-menu-item index="6"
              ><router-link  to="/user/IndexErrorBook">我的错题本</router-link></el-menu-item
            >
          </el-menu>
        </div>
      </el-col>
      <el-col :span="4" class="sideBox">
        <div class="grid-content bg-purple side">
          <el-dropdown>
            <span class="el-dropdown-link">
              <span id="userHead"></span>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item class="el-dropdown-item">个人中心</el-dropdown-item>
              <el-dropdown-item class="el-dropdown-item">消息中心</el-dropdown-item>
              <el-dropdown-item class="el-dropdown-item logout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div></el-col
      >
    </el-row>
  </div>
  <router-view></router-view>
  <div class="footer">
    <div class="logo"></div>
    <div class="ourInfo">
      <p><span class="el-icon-map-location"></span>地址：河南省新乡市华兰大道东段河南科技学院</p>
      <p><span class="el-icon-message"></span>邮编：453000 <span class="el-icon-mobile"></span>电话：18237377137</p>
      <p><span class="el-icon-chat-line-square"></span>邮箱：lovewlgzs.net</p>
    </div>
  </div>
</div>
</template>
<script>
import { Menu, MenuItem, Row, Col, Dropdown, DropdownItem,DropdownMenu } from "element-ui";
export default {
  name: "UserTop",
  components: {
    [Menu.name]: Menu,
    [MenuItem.name]: MenuItem,
    [Row.name]: Row,
    [Col.name]: Col,
    [Dropdown.name]: Dropdown,
    [DropdownItem.name]: DropdownItem,
    [DropdownMenu.name]:DropdownMenu
  },
};
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
}

#top {
  width: 100%;
  height: 80px;
  background-color: #fff;
  border-bottom: 1px solid rgb(243, 243, 243);
  overflow: hidden;
}
.el-menu-demo {
  width: 500px;
  float: right;
  border: none;
  margin-top: 20px;
}
.el-menu-item {
  margin: 0 8px;
  font-size: 16px;
}
.el-dropdown-link {
  display: inline-block;
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-dropdown-menu{
  width: 100px;
}
.el-dropdown-item{
  width: 100%;
  text-align: center;
}


#userHead{
  display: inline-block;
  width: 60px;
  height: 60px;
  border-radius: 60px;
  background-image: url(../../assets/myHead.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
.sideBox {
  display: flex;
  justify-content: center;
}
.side {
  margin-top: 10px;
  line-height: 60px;
}
.logout{
  border-top: 1px solid rgb(232, 232, 232);
}

.footer{
  display: flex;
  margin-left: 200px;
  padding-top: 50px;
  .logo{
    display: inline-block;
    width: 100px;
    height: 100px;
    background-image: url(../../assets/logo3.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100%;
  }
  .ourInfo{
    width:auto;
    p{
      line-height: 30px;
      font-size: 15px;
      color: #666;
    }
  }
}
// .bg-purple-dark {
//   background: #99a9bf;
// }
// .bg-purple {
//   background: #d3dce6;
// }
// .bg-purple-light {
//   background: #e5e9f2;
// }
// .grid-content {
//   border-radius: 4px;
//   min-height: 36px;
// }
</style>
<template>
  <div>
    <main>
      <div class="userContain">
        <div class="dynamic">
          <div class="infor">
            <h3>个人资料</h3>
          </div>
          <div class="modify">
            <div class="modifyTop">
              <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
              >
                <el-menu-item index="1">用户动态</el-menu-item>
                <el-menu-item index="2">资料修改</el-menu-item>
                <el-menu-item index="3">密码修改</el-menu-item>
              </el-menu>
              <div class="switch">
                  <router-view></router-view>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { Menu, MenuItem } from "element-ui";
export default {
  name: "UserCenter",
  components: {
    [Menu.name]: Menu,
    [MenuItem.name]: MenuItem,
  },
};
</script>

<style lang="less" scoped>
main {
  background-color: #fafafa;
  min-height: 500px;
}
.userContain {
  margin-top: 30px;
  padding: 30px 100px 30px 100px;
}
.dynamic {
  display: flex;
  flex-direction: row;
  .infor {
    border-radius: 4px;
    border: 1px solid #ebeef5;
    width: 400px;
    margin-right: 20px;
    background: white;
  }
  .modify {
    border-radius: 4px;
    border: 1px solid #ebeef5;
    .modifyTop {
      width: 643px;
    }
  }
}
</style>
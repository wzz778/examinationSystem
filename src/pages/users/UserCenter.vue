<template>
  <div>
    <main>
      <div class="userContain">
        <div class="dynamic">
          <div class="infor">
            <NewsInfor/>
          </div>
          <div class="modify">
            <div class="modifyTop">
              <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
              >
                <el-menu-item index="1" @click="check = '用户动态'"
                  >用户动态</el-menu-item
                >
                <el-menu-item index="2" @click="check = '资料修改'"
                  >资料修改</el-menu-item
                >
                <el-menu-item index="3" @click="check = '密码修改'"
                  >密码修改</el-menu-item
                >
              </el-menu>
              <div class="switch">
                <NewsTrends v-show="check == '用户动态'" />
                <UptadeInfor v-show="check == '资料修改'" />
                <UptadePass v-show="check == '密码修改'" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import NewsTrends from "@/components/user/Contenr/NewsTrends";
import UptadeInfor from "@/components/user/Contenr/UptadeInfor";
import NewsInfor from "@/components/user/Contenr/NewsInfor";
import UptadePass from "@/components/user/Contenr/UptadePass";
import { Menu, MenuItem } from "element-ui";
export default {
  name: "UserCenter",
  components: {
    [Menu.name]: Menu,
    [MenuItem.name]: MenuItem,
    NewsInfor,
    NewsTrends,
    UptadeInfor,
    UptadePass,
  },
  data() {
    return {
      check: "用户动态",
    };
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
    width: 400px;
    height: 358px;
    margin-right: 20px;
    background: white;
  }
  .modify {
    min-height: 100px;
    .modifyTop {
      border-radius: 4px;
      border: 1px solid #ebeef5;
      width: 643px;
    }
  }
}
</style>
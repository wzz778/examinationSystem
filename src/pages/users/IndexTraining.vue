<template>
  <div>
    <main>
      <div class="training">
        <div class="dynamic">
          <div class="infor">
            <PaperInfor />
          </div>
          <div class="modify">
            <PaperCreate />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import PaperInfor from "@/components/user/Training/PaperInfor";
import PaperCreate from "@/components/user/Training/PaperCreate";
export default {
  name: "IndexTraining",
  components: {
    PaperInfor,
    PaperCreate,
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
.training {
  margin-top: 30px;
  padding: 30px 100px 30px 100px;
}
.dynamic {
  display: flex;
  flex-direction: row;
  .infor {
    width: 400px;
    margin-right: 20px;
   background-color: #fafafa;
  }
  .modify {
    border-radius: 4px;
    border: 1px solid #ebeef5;
    background-color: #ffffff;
    min-height: 300px;
  }
}
</style>
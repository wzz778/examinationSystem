<template>
  <div>
    <carousel />
    <taskbox />
    <paperbox />
    <videoclass />
  </div>
</template>

<script>
import carousel from "../../components/user/Carousel.vue";
import taskbox from "../../components/user/TaskBox.vue";
import paperbox from "../../components/user/PaperBox.vue";
import videoclass from "../../components/user/VideoClass"
export default {
  name: "IndexCenter",
  data() {
    return {
      currentDate: new Date()
    };
  },
  components: {
    carousel,
    taskbox,
    paperbox,
    videoclass
  },
};
</script>

<style lang="less" scoped>
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
      clear: both
  }
</style>
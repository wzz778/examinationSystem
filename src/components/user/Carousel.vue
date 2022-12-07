<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import { Carousel,CarouselItem } from "element-ui";
export default {
    name:"IndexCarousel",
    components:{
        [Carousel.name]:Carousel,
        [CarouselItem.name]:CarouselItem
    }

}
</script>

<style lang="less" scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-image: url(../../assets/carousel1.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-image: url(../../assets/carousel2.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
</style>
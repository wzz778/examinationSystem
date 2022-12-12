<template>
  <div class="allPage">
    <div id="dplayer" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
import DPlayer from 'dplayer'
export default {
  data () {
    return {
      dp: {}
    }
  },
  mounted () {
    // 这里是业务需要地址从其它地方传过来
    var src = this.$route.query.src

    this.dp = new DPlayer({
      container: document.getElementById('dplayer'),
      theme: '#b7daff', // 风格颜色，例如播放条，音量条的颜色
      loop: false, // 是否自动循环
      lang: 'zh-cn', // 语言，'en', 'zh-cn', 'zh-tw'
      screenshot: true, // 是否允许截图（按钮），点击可以自动将截图下载到本地
      hotkey: true, // 是否支持热键，调节音量，播放，暂停等
      preload: 'auto', // 自动预加载
      volume: 0.7, // 初始化音量
      logo: '', // 在视频左脚上打一个logo
      video: {
        src: '../../assets/flower.mp4', // 播放视频的路径
        quality: [ // 设置多个质量的视频
          {
            name: 'HD',
            url: src,
            type: 'auto' // 'auto', 'hls', 'flv', 'dash', 'webtorrent', 'normal' 或 其他自定义类型
          }
        ],
        defaultQuality: 0, // 默认是HD
        pic: '', // 视频封面图片
        thumbnails: '' // 进度条上的缩略图,需要通过dplayer-thumbnails来生成
      },
      highlight: [ // 进度条时间点高亮
        {
          text: '10M',
          time: 600
        },
        {
          text: '20M',
          time: 1200
        }
      ]
    })
  }
}
</script>

<style lang="less" scoped>

</style>
import VueRouter from 'vue-router'
// 引入模块
import user from './user'
// 创建一个路由器
const router = new VueRouter({
    ...user
})
//路由守卫

export default router
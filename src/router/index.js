import VueRouter from 'vue-router'
// 引入模块
import user from './user'
import admin from './admin'
import teacher from './teacher'
// import Layout from '@/components/admin/Layout'
// 创建一个路由器
console.log(...admin);
const router = new VueRouter({
    routes: [
        ...user,
        ...teacher,
        ...admin,
        // {
        //     path:'/',
        //     component:Layout,
        // },

    ]
})
//路由守卫
export default router
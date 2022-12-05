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
//全局前置路由守卫————初始化的时候、每次路由切换之前被调用
router.beforeEach((to,from,next) => {
    if(to.meta.title=="登录考试系统"){
          window.document.title = to.meta.title 
          window.document.body.style.background="url('https://img2.baidu.com/it/u=3730740293,2792003521&fm=253&fmt=auto&app=138&f=JPEG?w=753&h=500') no-repeat center fixed"
          window.document.body.style.backgroundSize="cover"
            next()
    }else{
        next()
    }
  })
//路由守卫
export default router
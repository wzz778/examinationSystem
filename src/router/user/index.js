// 引入模板文件
import Top from '@/components/user/Top'
import TestLogin from '@/components/user/TestLogin'
// 写路由
export default [
    {
        path:'/user',
        name:'Top',
        component:Top,
    },
    {
        path:'/',
        name:'TestLogin',
        component:TestLogin,
        meta:{
        title:"登录考试系统"
        },
    },
]
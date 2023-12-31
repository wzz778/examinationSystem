// 引入模板文件
import TestLogin from '@/components/user/TestLogin'
import Top from '@/components/user/Top'
import examine from './examine'
import UserCenter from '@/pages/users/UserCenter'
import NewsCenter from '@/pages/users/NewsCenter'
// 写路由
export default [
    ...examine,
    {
        path:'/user',
        name:'Top',
        component:Top,
        children:[
            {
                path:'userCenter',
                name:'UserCenter',
                component:UserCenter,
                meta:{
                title:"个人中心"
                },
            },
            {
                path:'newsCenter',
                name:'NewsCenter',
                component:NewsCenter,
                meta:{
                title:"消息中心"
                },
            },
        ]
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
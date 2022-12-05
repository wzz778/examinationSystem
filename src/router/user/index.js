// 引入模板文件
import Top from '@/components/user/Top'
import examine from './examine'
// 写路由
export default [
    ...examine,
    {
        path:'/user',
        name:'Top',
        component:Top,
    },
    {
        path:'/',
        name:'TestLogin',
        component:TestLogin,
    },
]
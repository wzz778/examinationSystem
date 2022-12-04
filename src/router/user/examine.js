// 引入模板文件
import Top from '@/components/user/Top';
import Carousel from '@/components/user/Carousel'
import IndexVideoClass from '@/pages/users/IndexVideoClass'
import IndexPeper from '@/pages/users/IndexPeper'
import IndexRecord from '@/pages/users/IndexRecord'
import IndexTraining from '@/pages/users/IndexTraining'
import IndexErrorBook from '@/pages/users/IndexErrorBook'
// 写路由
export default [
    {
        path:'/user',
        name:'Top',
        component:Top,
        children:[
            {
                path:'Carousel',
                component:Carousel
            },
            {
                path:'IndexVideoClass',
                component:IndexVideoClass
            },
            {
                path:'IndexPeper',
                component:IndexPeper
            },
            {
                path:'IndexRecord',
                component:IndexRecord
            },
            {
                path:'IndexTraining',
                component:IndexTraining
            },
            {
                path:'IndexErrorBook',
                component:IndexErrorBook
            }
        ]
    },

]
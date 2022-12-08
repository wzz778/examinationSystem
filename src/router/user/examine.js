// 引入模板文件
import Top from '@/components/user/Top'
import IndexCenter from '@/pages/users/IndexCenter'
import IndexVideoClass from '@/pages/users/IndexVideoClass'
import IndexPaper from '@/pages/users/IndexPaper'
import IndexRecord from '@/pages/users/IndexRecord'
import IndexTraining from '@/pages/users/IndexTraining'
import IndexErrorBook from '@/pages/users/IndexErrorBook'
import DoPaper from '@/pages/users/DoPaper'
import ReadPaper from '@/pages/users/ReadPaper'
import CorrectPaper from '@/pages/users/CorrectPaper'
// 写路由
export default [
    {
        path:'/user',
        name:'Top',
        component:Top,
        children:[
            {
                path:'IndexCenter',
                component:IndexCenter
            },
            {
                path:'IndexVideoClass',
                component:IndexVideoClass
            },
            {
                path:'IndexPaper',
                component:IndexPaper
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
    {
        path:'/doPaper',
        name:'doPaper',
        component:DoPaper
    },
    {
        path:'/readPaper',
        name:'readPaper',
        component:ReadPaper
    },
    {
        path:'/correctPaper',
        name:'correctPaper',
        component:CorrectPaper
    }

]
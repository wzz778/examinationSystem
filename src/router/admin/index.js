// 引入模板文件
import Layout from '@/components/admin/Layout'
import AdminIndex from '@/pages/admin/AdminIndex'
import SubjectList from '@/pages/admin/Subject/SubjectList'
// 写路由
export default [
    {
        path:'/admin',
        name:'Layout',
        component:Layout,
        children:[ //通过children配置子级路由
        {
            path:'index', //此处一定不要写：/news
            component:AdminIndex
        },
        {
            path:'subjectlist', //此处一定不要写：/news
            component:SubjectList
        },
    ]
    },

]
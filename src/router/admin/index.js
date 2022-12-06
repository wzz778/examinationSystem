// 引入模板文件
import Layout from '@/components/admin/Layout'
import AdminIndex from '@/pages/admin/Home/AdminIndex'
import SubjectList from '@/pages/admin/Subject/list'
import SubjectEdit from '@/pages/admin/Subject/edit'
// import KnowledgeList from '@/pages/admin/Knowledge/list'
// import KnowledgeEdit from '@/pages/admin/Knowledge/edit'
// import TaskList from '@/pages/admin/Task/list'
// import TaskEdit from '@/pages/admin/Task/edit'
// import VideoList from '@/pages/admin/Video/list'
// import VideoEdit from '@/pages/admin/Video/edit'
// import MessageList from '@/pages/admin/Message/list'
// import MessageEdit from '@/pages/admin/Message/edit'
// import JournalList from '@/pages/admin/Journal/list'
// 写路由
export default [
    // {
    //     path:'/admin',
    //     name:'Layout',
    //     component: Layout,
    //     children:[ //通过children配置子级路由
    //     {
    //         path:'index', 
    //         component:AdminIndex
    //     },
    //     {
    //         path:'subject/list', 
    //         component:SubjectList,
    //     },
    //     {
    //         path:'subject/edit', 
    //         component:SubjectEdit,
    //     },
    //     {
    //         path:'knowledge/list', 
    //         component:KnowledgeList,
    //     },
    //     {
    //         path:'knowledge/edit', 
    //         component:KnowledgeEdit,
    //     },
    //     {
    //         path:'task/list', 
    //         component:TaskList,
    //     },
    //     {
    //         path:'task/edit', 
    //         component:TaskEdit,
    //     },
    //     {
    //         path:'video/list', 
    //         component:VideoList,
    //     },
    //     {
    //         path:'video/edit', 
    //         component:VideoEdit,
    //     },
    //     {
    //         path:'message/list', 
    //         component:MessageList,
    //     },
    //     {
    //         path:'message/edit', 
    //         component:MessageEdit,
    //     },
    //     {
    //         path:'journal/list', 
    //         component:JournalList,
    //     },
    // ]
    // },
    {
        path:'/admin',
        name:'Layout',
        component: Layout,
        // meta:{
        //     title:"首页"
        // },
        children:[ //通过children配置子级路由
            {
                path:'index', 
                component:AdminIndex,
                meta:{
                    title:"首页"
                }
            },
        ]
    },
    {
        path:'/admin/subject',
        name:'Layout',
        component: Layout,
        meta:{
            title:"管理"
        },
        children:[ //通过children配置子级路由
            {
                path:'list', 
                component:SubjectList,
                meta:{
                    title:"列表"
                }
            },
            {
                path:'edit', 
                component:SubjectEdit,
                meta:{
                    title:"创建",
                }

            },
        ]
    },
]
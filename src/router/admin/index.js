// 引入模板文件
import Layout from '@/components/admin/Layout'
import AdminIndex from '@/pages/admin/Home/AdminIndex'
import SubjectList from '@/pages/admin/Subject/list'
import SubjectEdit from '@/pages/admin/Subject/edit'
import KnowledgeList from '@/pages/admin/Knowledge/list'
import KnowledgeEdit from '@/pages/admin/Knowledge/edit'
import TaskList from '@/pages/admin/Task/list'
import TaskEdit from '@/pages/admin/Task/edit'
import VideoList from '@/pages/admin/Video/list'
import VideoEdit from '@/pages/admin/Video/edit'
import MessageList from '@/pages/admin/Message/list'
import MessageEdit from '@/pages/admin/Message/edit'
import JournalList from '@/pages/admin/Journal/list'
// 写路由
export default [
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
                    title:"主页"
                }
            },
        ]
    },
    {
        path:'/admin/subject',
        name:'Layout',
        component: Layout,
        meta:{
            title:"学科管理"
        },
        children:[ //通过children配置子级路由
            {
                path:'list', 
                component:SubjectList,
                name:"SubjectList",
                meta:{
                    title:"学科列表"
                }
            },
            {
                path:'edit', 
                component:SubjectEdit,
                name:"SubjectEdit",
                meta:{
                    title:"学科创建",
                }

            },
        ]
    },
    {
        path:'/admin/knowledge',
        name:'Layout',
        component: Layout,
        meta:{
            title:"知识点管理"
        },
        children:[ //通过children配置子级路由
            {
                path:'list', 
                component:KnowledgeList,
                meta:{
                    title:"知识点列表"
                }
            },
            {
                path:'edit', 
                component:KnowledgeEdit,
                meta:{
                    title:"知识点创建",
                }

            },
        ]
    },
    {
        path:'/admin/task',
        name:'Layout',
        component: Layout,
        meta:{
            title:"任务管理"
        },
        children:[ //通过children配置子级路由
            {
                path:'list', 
                component:TaskList,
                meta:{
                    title:"任务列表"
                }
            },
            {
                path:'edit', 
                component:TaskEdit,
                meta:{
                    title:"任务创建",
                }

            },
        ]
    },
    {
        path:'/admin/video',
        name:'Layout',
        component: Layout,
        meta:{
            title:"视频管理"
        },
        children:[ //通过children配置子级路由
            {
                path:'list', 
                component:VideoList,
                meta:{
                    title:"视频列表"
                }
            },
            {
                path:'edit', 
                component:VideoEdit,
                meta:{
                    title:"视频创建",
                }

            },
        ]
    },
    {
        path:'/admin/message',
        name:'Layout',
        component: Layout,
        meta:{
            title:"信息管理"
        },
        children:[ //通过children配置子级路由
            {
                path:'list', 
                component:MessageList,
                meta:{
                    title:"信息列表"
                }
            },
            {
                path:'edit', 
                component:MessageEdit,
                meta:{
                    title:"信息创建",
                }

            },
        ]
    },
    {
        path:'/admin/journal',
        name:'Layout',
        component: Layout,
        meta:{
            title:"日志管理"
        },
        children:[ //通过children配置子级路由
            {
                path:'list', 
                component:JournalList,
                meta:{
                    title:"日志列表"
                }
            },
        ]
    },
    {
        path:'/admin/slide',
        name:'Layout',
        component: Layout,
        meta:{
            title:"轮播图管理"
        },
        children:[ //通过children配置子级路由
            {
                path:'list', 
                component: () => import('@/pages/admin/Slide/list.vue'),
                meta:{
                    title:"轮播图列表"
                }
            },
        ]
    },
]
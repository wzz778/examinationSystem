// 引入组件
import teacherLayout from '@/components/teacher/Layout'
import studentList from '@/components/teacher/studentList'

export default [
    {
        path: '/teacher',
        component: teacherLayout,
        children: [
            {
                path: 'studentList',
                component: studentList
            }
        ]
    },
]
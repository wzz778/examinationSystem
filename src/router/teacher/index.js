// 引入组件
import teacherLayout from '@/components/teacher/Layout'
import studentList from '@/components/teacher/studentList'
import classList from '@/components/teacher/classManagement/classList'

export default [
    {
        path: '/teacher',
        component: teacherLayout,
        children: [
            {
                path: 'studentList',
                component: studentList
            },
            {
                path: 'classList',
                component: classList
            }
        ]
    },
]
// 引入组件
import teacherLayout from '@/components/teacher/Layout'
import studentList from '@/components/teacher/studentList'
import classList from '@/components/teacher/classManagement/classList'
import classCreat from "@/components/teacher/classManagement/classCreat"
import examinationList from "@/components/teacher/volumeManagement/examinationList"
import questionList from "@/components/teacher/questionManagement/questionList"
import correctingList from "@/components/teacher/answersheetManagement/correctingList"
import examinationFinish from "@/components/teacher/answersheetManagement/examinationFinish"
import analysisList from "@/components/teacher/analysisList"
import singleChoice from "@/components/teacher/questionManagement/singleChoice"
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
            },
            {
                path: "classCreat",
                component: classCreat
            },
            {
                path: "examinationList",
                component: examinationList
            },
            {
                path: "questionList",
                component: questionList
            },
            {
                path: "correctingList",
                component: correctingList
            },
            {
                path: "examinationFinish",
                component: examinationFinish
            },
            {
                path: 'analysisList',
                component: analysisList
            },
            {
                path: "singleChoice",
                component: singleChoice
            }
        ]
    },
]
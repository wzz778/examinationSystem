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
import multiSelect from "@/components/teacher/questionManagement/multiSelect"
import judgmentQuestion from "@/components/teacher/questionManagement/judgmentQuestion"
import gapFilling from "@/components/teacher/questionManagement/gapFilling"
import shortAnswer from "@/components/teacher/questionManagement/shortAnswer"
import testCreat from "@/components/teacher/volumeManagement/testCreat"
import adminStudentList from "@/components/teacher/teacherAdmin/adminStudentList"
import teacherList from "@/components/teacher/teacherAdmin/teacherList"
import adminList from "@/components/teacher/teacherAdmin/adminList"
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
            },
            {
                path: "multiSelect",
                component: multiSelect
            },
            {
                path: "judgmentQuestion",
                component: judgmentQuestion
            },
            {
                path: "gapFilling",
                component: gapFilling
            },
            {
                path: "shortAnswer",
                component: shortAnswer
            },
            {
                path: "testCreat",
                component: testCreat
            },
            {
                path: "adminStudentList",
                component: adminStudentList
            },
            {
                path: "teacherList",
                component: teacherList
            },
            {
                path: "adminList",
                component: adminList
            }
        ]
    },
]
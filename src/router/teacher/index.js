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
import graphicPresentation from "@/components/teacher/graphicPresentation"
import richText from "@/components/teacher/richText"
export default [
    {
        path: '/teacher',
        component: teacherLayout,
        children: [
            {
                path: 'studentList',
                component: studentList,
                meta: {
                    title: "学生列表"
                }
            },
            {
                path: 'classList',
                component: classList,
                meta: {
                    title: "班级列表"
                }
            },
            {
                path: "classCreat",
                component: classCreat,
                meta: {
                    title: "创建班级"
                }
            },
            {
                path: "examinationList",
                component: examinationList,
                meta: {
                    title: "试卷列表"
                }
            },
            {
                path: "questionList",
                component: questionList,
                meta: {
                    title: "题目列表"
                }
            },
            {
                path: "correctingList",
                component: correctingList,
                meta: {
                    title: "批改列表"
                }
            },
            {
                path: "examinationFinish",
                component: examinationFinish,
                meta: {
                    title: "试卷完成"
                }
            },
            {
                path: 'analysisList',
                component: analysisList,
                meta: {
                    title: "试卷列表"
                }
            },
            {
                path: "singleChoice",
                component: singleChoice,
                meta: {
                    title: "单选题创建"
                }
            },
            {
                path: "multiSelect",
                component: multiSelect,
                meta: {
                    title: "多选题创建"
                }
            },
            {
                path: "judgmentQuestion",
                component: judgmentQuestion,
                meta: {
                    title: "判断题创建"
                }
            },
            {
                path: "gapFilling",
                component: gapFilling,
                meta: {
                    title: "填空题创建"
                }
            },
            {
                path: "shortAnswer",
                component: shortAnswer,
                meta: {
                    title: "简答题创建"
                }
            },
            {
                path: "testCreat",
                component: testCreat,
                meta: {
                    title: "试卷创建"
                }
            },
            {
                path: "adminStudentList",
                component: adminStudentList,
                meta: {
                    title: "用户列表"
                }
            },
            {
                path: "teacherList",
                component: teacherList,
                meta: {
                    title: "教师列表"
                }
            },
            {
                path: "adminList",
                component: adminList,
                meta: {
                    title: "管理员列表"
                }
            },
            {
                path: "graphicPresentation",
                component: graphicPresentation,
                meta: {
                    title: "主页"
                }
            }
        ],
    },
    {
        path: "/richText",
        component: richText
    }
]
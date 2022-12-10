import instance from "./myAxios"

export const Text = async () => instance({
    url: "/user/getLogs",
    method: "GET"
})
// 取出所有班级（不带参数）
export const getAllGrade = async () => instance({
    url: "/grade/getAllGrade",
    method: "GET"
})
// 添加班级
export const addGrade = async (data) => instance({
    url: "/grade/addGrade",
    method: "POST",
    params: data
})
// 取出所有班级（带参数）
export const getAllGradeHas = async (data) => instance({
    url: "/grade/getAllGrade",
    method: "GET",
    params: data
})
// 获取试卷
export const getPaper = async (data) => instance({
    url: "/exam/getPaper",
    method: "GET",
    params: data
})
// 删除班级
export const deleteGrade = async (data) => instance({
    url: "/grade/deleteGrade",
    method: "DELETE",
    params: data
})
// 添加题目
export const addQuestion = async (data) => instance({
    url: "/quesition/addQuestion",
    method: "POST",
    params: data,
})
// 获取学科
export const getAllSubject = async (data) => instance({
    url: "/admin/getAllSubject",
    method: "GET",
    params: data
})
// 搜寻问题
export const getOfClassQuestion = async (data) => instance({
    url: "/quesition/getOfClassQuestion",
    method: "GET",
    params: data
})

export const getSubmitPaper = async (data) => instance({
    url: "/exam/getSubmitPaper",
    method: "GET",
    params: data
})

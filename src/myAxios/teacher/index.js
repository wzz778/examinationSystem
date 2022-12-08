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
    data: data
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

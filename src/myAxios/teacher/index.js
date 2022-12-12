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
// 修改班级
export const updateGrade = async (data) => instance({
    url: "/grade/updateGrade",
    method: "PUT",
    params: data
})
// 添加题目
export const addQuestion = async (data) => instance({
    url: "/quesition/addQuestion",
    method: "POST",
    params: data,
})
// 修改题目
export const updateQuestion = async (data) => instance({
    url: "/quesition/updateQuestion",
    method: "PUT",
    params: data
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
// 删除问题
export const deleteQuestion = async (data) => instance({
    url: "/quesition/deleteQuestion",
    method: "DELETE",
    params: data
})
// 获取提交试卷
export const getSubmitPaper = async (data) => instance({
    url: "/exam/getSubmitPaper",
    method: "GET",
    params: data
})
// 创建试卷
export const publishPaper = async (data) => instance({
    url: "/exam/publishPaper",
    method: "POST",
    params: data
})
// 修改试卷
export const updatePaper = async (data) => instance({
    url: "/exam/updatePaper",
    method: "PUT",
    params: data
})
// 删除试卷
export const deletePaper = async (data) => instance({
    url: "/exam/deletePaper",
    method: "DELETE",
    params: data
})
// 获取所有用户信息
export const getAllUser = async (data) => instance({
    url: "/admin/getAllUser",
    method: "GET",
    params: data
})
// 删除学生
export const deleteStudent = async (data) => instance({
    url: "/teacher/deleteStudent",
    method: "DELETE",
    params: data
})

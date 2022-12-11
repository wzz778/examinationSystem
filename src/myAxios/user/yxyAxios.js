//引入二次封装的axios（带有请求、响应的拦截器）
// import axios from "axios"
import requests from "../request.js";
//书写接口
export const getAllSubject = async (data) =>requests({
    url:'admin/getAllSubject',
    method:'get',
    params:data,
});
// //书写接口
// export const firstajaxs = async (data) =>requests({
//     url:'quesition/getAllQuestion',
//     method:'get',
//     data:data
// });

//获取用户班级的学科
export const getMyCourse=async(data)=>requests({
    url:'admin/searchSubject',
    method:'get',
    params:data
})

//获取试卷
export const getPapers=async(data)=>requests({
    url:'exam/getPaper',
    method:'get',
    params:data
})
//引入二次封装的axios（带有请求、响应的拦截器）
// import axios from "axios"
import requests from "../request.js";
//书写接口
//获取全部学科
export const getAllSubject = async (params) =>requests({url:'admin/getAllSubject',method:'get',params});

//添加学科
export const addSubject = async (params) =>requests({url:'admin/addSubject',method:'post',params});

//获取类型选择的学科
export const searchSubject = async (params) =>requests({url:'admin/searchSubject',method:'get',params});

//删除选择的学科
export const deleteSubject = async (params) =>requests({url:'/admin/deleteSubject',method:'delete',params});

//编辑学科
export const updateSubject = async (params) =>requests({url:'admin/updateSubject',method:'put',params});






//书写接口
export const firstajax = async (data) =>requests({
    url:'admin/getAllSubject',
    method:'get',
    params:data
});

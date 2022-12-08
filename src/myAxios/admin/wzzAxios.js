//引入二次封装的axios（带有请求、响应的拦截器）
// import axios from "axios"
import requests from "../request.js";
//书写接口
export const getAllSubject = async (data) =>requests({
    url:'admin/getAllSubject',
    method:'get',
    params:data,
});
//书写接口
export const firstajax = async (data) =>requests({
    url:'admin/getAllSubject',
    method:'get',
    params:data
});

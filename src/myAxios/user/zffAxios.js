//引入二次封装的axios（带有请求、响应的拦截器）
// import axios from "axios"
import requests from "../request.js";
//书写接口
export const UserSend = async (data) =>requests({
    url:'user/logged/sendCode',
    method:'post',
    params:data,
});
export const Uregister = async (data) =>requests({
    url:'/user/outLogin/register',
    method:'post',
    params:data,
});
export const Ulogin = async (data) =>requests({
    url:'user/outLogin/login',
    method:'post',
    params:data,
});
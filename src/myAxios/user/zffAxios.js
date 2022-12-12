//引入二次封装的axios（带有请求、响应的拦截器）
// import axios from "axios"
import requests from "../request.js";
//书写接口
//发送验证码
export const UserSend = async (data) =>requests({
    url:'user/logged/sendCode',
    method:'post',
    params:data,
});
//注册
export const Uregister = async (data) =>requests({
    url:'/user/outLogin/register',
    method:'post',
    params:data,
});
//登录
export const Ulogin = async (data) =>requests({
    url:'user/outLogin/login',
    method:'post',
    params:data,
});
//修改用户信息
export const ZupdateUserInfo = async (data) =>requests({
    url:'user/updateUserInfo',
    method:'put',
    params:data,
});
//更新密码
export const ZupdatePassword= async (data) =>requests({
    url:'user/updatePassword',
    method:'put',
    params:data,
});
//添加日志（增加用户的登录动态）
export const ZaddUserLog= async (data) =>requests({
    url:'user/addUserLog',
    method:'post',
    params:data,
});
//取出日志（取出用户的登录动态）
export const ZgetLogs= async () =>requests({
    url:'user/getLogs',
    method:'get',
});
//加入班级（班级口令）
export const ZaddGrade= async (data) =>requests({
    url:'user/addGrade',
    method:'put',
    params:data,
});
//更新用户头像
export const ZupdatePhoto= async (data) =>requests({
    url:'user/updatePhoto',
    method:'put',
    params:data,
});
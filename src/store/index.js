// 引入Vuex
import Vuex from 'vuex'
// 引入vue
import Vue from 'vue'
// 使用Vuex
Vue.use(Vuex)

import user from './user'
import admin from './admin'
// import message from './message'
import teacher from './teacher'

// 准备actions(操作数据之前的操作)
const actions = {}
// 准备mutations(操作数据,键值一般大写)
const mutations = {
    LOGIN: function (state, value) {

        console.log("mutations中的+被调用了", state, value);
        state.token = value.token
        state.power=value.pow.power
        state.userInfo=value.pow
    },
}
// 准备state(存放数据)
const state = {
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzA1NzQwNjUsInVzZXJuYW1lIjoiMTIzNDU2Nzg5IiwicG93ZXIiOiIwIiwiaWQiOjN9.4V4roV3kq0Uj4yoFR0vfZeJWA9tfYOMrERVdO_bLCJM',
    power: "",
    userInfo:""
}

const getters = {}

// 导出
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
        user,
        admin,
        teacher
        // message
    }
})  
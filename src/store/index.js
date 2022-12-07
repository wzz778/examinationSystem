// 引入Vuex
import Vuex from 'vuex'
// 引入vue
import Vue from 'vue'
// 使用Vuex
Vue.use(Vuex)

import user from './user'
import admin from './admin'
// 准备actions(操作数据之前的操作)
const actions = {}
// 准备mutations(操作数据,键值一般大写)
const mutations = {}
// 准备state(存放数据)
const state = {
    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzA0MDEwNTAsInVzZXJuYW1lIjoiMTIzNDU2Nzg5IiwicG93ZXIiOiIwIiwiaWQiOjN9.BuRp-lg9Bb7Ez3dkLYhb_vR9SqZrzrIT6JygZpEZP1g"
}
// 准备getters
const getters = {}
// 导出
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
    modules: {
        user,
        admin
    }
})
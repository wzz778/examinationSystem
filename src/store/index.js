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
const mutations = {}
// 准备state(存放数据)
const state = {
    token:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzAzNzc3NzUsInVzZXJuYW1lIjoiMjI5NTkwODI1MSIsInBvd2VyIjoiMCIsImlkIjo0fQ.HxA1GlFl3VGKBbNjnIvjRVre5DUsTgK8tQ57gUSG_YY',
    power:""
}

const getters={}

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
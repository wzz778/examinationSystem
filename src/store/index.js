// 引入Vuex
import Vuex from 'vuex'
// 引入vue
import Vue from 'vue'
// 使用Vuex
Vue.use(Vuex)

import user from './user'
import admin from './admin'
// 导出
export default new Vuex.Store({
    modules: {
        user,
        admin
    }
})
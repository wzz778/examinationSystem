import Vue from 'vue'
import App from './App.vue'
// 引入路由
import VueRouter from 'vue-router'
// 引入less
import less from 'less'
//引入element
import { MessageBox, Message , Icon} from 'element-ui'

// 引入路由器
import router from './router/index'
//引入vuex配置文件
import store from './store'

// 配置less
Vue.use(less)
//配置路由
Vue.use(VueRouter)
Vue.use(Icon)

//配置(可全局通过this调用)
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message

new Vue({
  render: h => h(App),
  //配置store
  store: store,
  beforeCreate() {
    //全局事件总线
    Vue.prototype.$bus = this
  },
  //配置路由
  router: router,
}).$mount('#app')
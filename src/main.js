import Vue from 'vue'
import App from './App.vue'
// 引入路由
import VueRouter from 'vue-router'
// 引入less
import less from 'less'
//引入element
<<<<<<< HEAD
import { MessageBox, Message, Icon, Button ,Table, TableColumn,Pagination,Form, FormItem,Input ,Card,Timeline,Select,DatePicker,Option,Slider} from 'element-ui'
=======
import { MessageBox, Message, Icon, Button, Table, TableColumn, Pagination, Form, FormItem, Input, Card, Timeline, Select, DatePicker, Option } from 'element-ui'
>>>>>>> a582bf782c9f99d15ea4933c3446f1032bf0f52f
// 引入路由器
import router from './router/index'
//引入vuex配置文件
import store from './store'

// 引入全局自定义组件
import myRichText from "./myRichText/index"

// 配置less
Vue.use(less)
//配置路由
Vue.use(VueRouter)
Vue.use(Icon)
Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Card)
Vue.use(Timeline)
Vue.use(DatePicker)
Vue.use(Select)
Vue.use(Option)
Vue.use(Slider)

// 配置
Vue.use(myRichText)

Vue.config.productionTip = false
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
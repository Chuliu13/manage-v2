import Vue from 'vue'
import App from './App.vue'

// import '../plugins/element.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'

// import axios from 'axios'
import service from './service'
import router from './router'

import echarts from 'echarts'

Vue.use(ElementUI);
// Vue.prototype.axios = axios // 挂载到原型,可以在全局使用
Vue.prototype.service = service 
Vue.prototype.$echarts = echarts 
Vue.config.productionTip = false

// 路由导航守卫
// F12 -> Application -> Storage - >local Storage -> 删除username 测试
router.beforeEach((to, from, next) => {
  if(!localStorage.getItem('username')){
    if (to.path !== '/login') {
      next('/login')
    } else next()
  } next()
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

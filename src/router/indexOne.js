import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/Home.vue'

Vue.use(Router)

export default new Router({
    // 注意这里不要写错了 是 routes,不是router
    routes: [
        {
            path: '/',
            redirect:'/login', //重定向
            component: () => import('@/components/Login')
        },
        {
            path: '/login',
            name:'Login',
            component: () => import('@/components/Login')
        },
        {
            path: '/home',
            // component: Home
            // component: () => import('@/components/Home')
            component: resolve => require(['@/components/Home'], resolve)
        }
    ],
    mode: 'history'
})
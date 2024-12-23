import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = [
    {
        path: '/',
        component: () => import('../views/dashboard/index.vue'),
    },
    {
        path: '/form',
        component: () => import('../views/form/index.vue'),
    }
]
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router
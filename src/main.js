import Vue from 'vue'
import App from './App.vue'
import router from './router'
console.log('router', router)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

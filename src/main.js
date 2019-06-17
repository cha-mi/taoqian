import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import '../public/css/swiper.css'
import '../public/css/base_px.css'
// import Cookies from "js-cookie"

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')


router.beforeEach((to, from, next) => {
    // let user = Cookies.get('username')
    let user = window.sessionStorage.getItem('userKey')
    if (to.path === '/my' || to.path === '/DkDetails' || to.path === '/newsdetails') {
        if (user) {
            next()
        } else {
            next('/tclogin')
        }
    } else {
        next();
    }
});
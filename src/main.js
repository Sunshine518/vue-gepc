import Vue from 'vue'
import App from './App.vue'
import router from './geely/router/router'   //登录、前台路由、后台路由
import ElementUI from 'element-ui'
import axios from 'axios';
import QS from 'qs'
import 'element-ui/lib/theme-chalk/index.css'
import './elementStyle.scss'
import Router from 'vue-router'


// 处理vue router 报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

axios.defaults.withCredentials=true; //添加自定义Cookie信息作为请求头

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$axios = axios;
Vue.prototype.qs = QS;


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')

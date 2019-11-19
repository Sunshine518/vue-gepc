import Vue from 'vue'
import App from './App.vue'
import router from './geely/router/router'   //登录、前台路由、后台路由
import ElementUI from 'element-ui'
import axios from 'axios';
import QS from 'qs'
import 'element-ui/lib/theme-chalk/index.css'
import './elementStyle.scss'    //自定义覆盖element样式
import Router from 'vue-router'
import moment from 'moment'   //时间戳转换
import loading from './components/Loading/loading.js'   //自定义Loading组件，项目未应用该组件

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
Vue.prototype.moment  =  moment
Vue.use(loading)


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')

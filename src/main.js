import Vue from 'vue'
import App from './App.vue'
import router from './geely/router/router'   //登录、前台路由、后台路由
import ElementUI from 'element-ui'
import axios from 'axios';
import QS from 'qs'

import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$axios = axios;
Vue.prototype.qs = QS;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')

import Vue from 'vue'  //引入vue
import Vuex from 'vuex'  //引入vuex
import noticeStore from '../geely/front/Notice/store.js';

//使用vuex
Vue.use(Vuex)
//创建vuex实例
const store = new Vuex.Store({
    modules: {
        noticeStore:noticeStore
    },
})

export default store //导出store
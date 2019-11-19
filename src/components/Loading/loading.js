//先引入loading组件
import Vue from 'vue'
import loadingComponent from './Loading.vue'
// 生成一个Vue的子类 同时这个子类也就是组件
const LoadingConstructor = Vue.extend(loadingComponent)
// 将这个实例挂载在我创建的div上
// 并将此div加入全局挂载点内部
const instance = new LoadingConstructor({
    el: document.createElement('div')
})

instance.show = false // 默认隐藏
const loading = {
    show() { // 显示方法
        instance.show = true
        document.body.appendChild(instance.$el)
    },
    hide() { // 隐藏方法
        instance.show = false
    }
}

export default {
    install() {
        if (!Vue.$loading) {
            Vue.$loading = loading
        }
        Vue.mixin({
            created() {
                this.$loading = Vue.$loading
            }
        })
    }
}

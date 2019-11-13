import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Page1 from '@/components/page1'
import Page2 from '@/components/page2'
import Page3 from '@/components/page3'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            children:[
                {
                    path: '/Page1',
                    name: 'Page1',
                    component: Page1
                },
                {
                    path: '/Page2',
                    name: 'Page2',
                    component: Page2
                },
                {
                    path: '/Page3',
                    name: 'Page3',
                    component: Page3
                }
            ]
        }
    ]
})
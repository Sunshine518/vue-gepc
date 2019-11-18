import Vue from 'vue'
import Router from 'vue-router'
import Login from '../login/Login.vue'
import Home from '../front/Home.vue'
import Back from '../back/Main.vue'
import Page1 from '../back/a.vue'
import Page2 from '../back/b.vue'
import Page3 from '../back/c.vue'

//前台
import CarsSpareParts from '../front/CarsSpareParts.vue'
import NewsPage from '../front/NewsPage.vue'

Vue.use(Router)

export default new Router({
    mode:'history',   //去除路径锚点
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            children:[
                {
                    path: '/Page1',
                    name: 'Page1',
                    component: Page1
                },  {
                    path: '/Page2',
                    name: 'Page2',
                    component: Page2
                },  {
                    path: '/Page3',
                    name: 'Page3',
                    component: Page3
                },  {
                    path: '/carsSpareParts',
                    name: 'carsSpareParts',
                    component: CarsSpareParts
                }
            ]
        },
        {
            path: '/newsPage',
            name: 'newsPage',
            component: NewsPage,
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/back',
            name: 'back',
            component: Back,
            children:[
                {
                    path: '/Page1',
                    name: 'Page1',
                    component: Page1
                },  {
                    path: '/Page2',
                    name: 'Page2',
                    component: Page2
                },  {
                    path: '/Page3',
                    name: 'Page3',
                    component: Page3
                }
            ]
        }
    ]
})
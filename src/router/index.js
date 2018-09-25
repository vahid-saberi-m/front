import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import company from '@/components/company'
import Home from '@/components/Home'
import Introduction from '@/components/Introduction.vue'
import userDashboard from '@/components/user/userDashboard'
import chooseCompany from '@/components/user/chooseCompany'
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },

        {
            path: '/company/:id',
            name: 'company',
            props: true,
            component: company
        },
        {
            path: '/introduction',
            name: 'introduction',
            component: Introduction
        },
        {
            path: '/user/dashboard',
            name: 'userDashboard',
            component: userDashboard,
            meta:{
                requiresAuth: true,
            }
        },
        {
            path: '/user/choose-company',
            name: 'chooseCompany',
            component: chooseCompany,
            meta:{
                requiresAuth: true,
            }
        }

    ]
})

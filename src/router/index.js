import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import company from '@/components/public/company'
import Home from '@/components/Home'
import Introduction from '@/components/Introduction.vue'
import userDashboard from '@/components/user/userDashboard'
import chooseCompany from '@/components/user/chooseCompany'
import newPost from '@/components/user/jobPosts/newPost'
import livePosts from '@/components/user/jobPosts/livePosts'
import waitingPosts from '@/components/user/jobPosts/waitingPosts'
import expiredPosts from '@/components/user/jobPosts/expiredPosts'
import {store} from "../store/store";
import jobBoard from '@/components/user/jobPosts/jobBoard/jobBoard'

Vue.use(Router);

const router = new Router({
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
        },

        {
            path: '/user/jobPosts/newPost',
            name: 'newPost',
            component: newPost,
            meta:{
                requiresAuth: true,
            }
        },

        {
            path: '/user/jobPosts/livePosts',
            name: 'livePosts',
            component: livePosts,
            meta:{
                requiresAuth: true,
            }
        },

        {
            path: '/user/jobPosts/waitingPosts',
            name: 'waitingPosts',
            component: waitingPosts,
            meta:{
                requiresAuth: true,
            }
        },
        {
            path: '/user/jobPosts/expiredPosts',
            name: 'expiredPosts',
            component: expiredPosts,
            meta:{
                requiresAuth: true,
            }
        },
        {
            path: '/job_board/:id',
            name: 'jobBoard',
            component: jobBoard,
            meta:{
                requiresAuth: true,
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.isLoggedIn) {
            console.log('inja2')
            next({
                path: '/introduction',
            })
        } else {
            next()
        }
    } else {
        next() // make sure to always call next()!
    }
});

export default router;
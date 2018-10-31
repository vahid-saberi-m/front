import Vue from 'vue'
import Router from 'vue-router'
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
import editCompany from '@/components/user/company/editCompany'
import companyUsers from '@/components/user/company/companyUsers'
import userCompany from '@/components/user/userDashboard/userCompany'
import editProfile from '@/components/user/users/editProfile'
import events from '@/components/user/events/events'
import applyModal from '@/components/public/jobPosts/jobPostCard/applyModal'
import appliedSuccessfully from '@/components/public/jobPosts/jobPostCard/applyModal/appliedSuccessfully'
import applyForm from '@/components/public/jobPosts/jobPostCard/applyModal/applyForm'
import questions from '@/components/public/jobPosts/jobPostCard/applyModal/questions'
import checkApplicant from '@/components/public/jobPosts/jobPostCard/applyModal/checkApplicant'
import appliedBefore from '@/components/public/jobPosts/jobPostCard/applyModal/appliedBefore'

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
            component: company,
            children:[
                {
                    path: '/check-applicant/:jobPostId',
                    component: checkApplicant,
                    name:'checkApplicant'
                },
                {
                    path: '/apply/:jobPostId',
                    component: applyModal,
                    name:'applyModal'
                },
                {
                    path: '/apply/applied-before',
                    component: appliedBefore,
                    name:'appliedBefore'
                },
                {
                    path: '/apply/applied-successfully',
                    component: appliedSuccessfully,
                    name:'appliedSuccessfully'
                },
                {
                    path: '/apply/apply-form',
                    component: applyForm,
                    name:'applyForm'
                },
                {
                    path: '/apply/questions',
                    component: questions,
                    name:'questions'
                },


            ]
        },
        {
            path: '/introduction',
            name: 'introduction',
            component: Introduction
        },
        {
            path: '/user',
            component: userDashboard,
            meta: {
                requiresAuth: true,
            },
            children: [
                {
                    path: '/',
                    component: userCompany
                },
                {
                    path: '/jobPosts/newPost',
                    name: 'newPost',
                    meta: {
                        requiresAuth: true
                    },
                    component: newPost
                },
                {
                    path: '/profile/edit',
                    name: 'editProfile',
                    meta: {
                        requiresAuth: true
                    },
                    component: editProfile
                },
                {
                    path: '/jobPosts/livePosts',
                    name: 'livePosts',
                    meta: {
                        requiresAuth: true
                    },
                    component: livePosts
                },
                {
                    path: '/jobPosts/expiredPosts',
                    name: 'expiredPosts',
                    meta: {
                        requiresAuth: true
                    },
                    component: expiredPosts
                },
                {
                    path: '/jobPosts/waitingPosts',
                    name: 'waitingPosts',
                    meta: {
                        requiresAuth: true
                    },
                    component: waitingPosts
                },
                {
                    path: '/job_board/:id',
                    name: 'jobBoard',
                    meta: {
                        requiresAuth: true
                    },
                    component: jobBoard
                },
                {
                    path: '/admin/company/edit',
                    name: 'editCompany',
                    component: editCompany,
                    meta: {
                        requiresAuth: true,
                    }
                },
                {
                    path: '/admin/company/users',
                    name: 'companyUsers',
                    component: companyUsers,
                    meta: {
                        requiresAuth: true,
                    }
                },
                {
                    path: '/admin/events',
                    name: 'events',
                    component: events,
                    meta: {
                        requiresAuth: true,
                    }
                },
            ]
        },
        {
            path: '/user/choose-company',
            name: 'chooseCompany',
            component: chooseCompany,
            meta: {
                requiresAuth: true,
            }
        },

    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.isLoggedIn) {
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
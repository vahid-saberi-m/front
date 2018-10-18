import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import request from '../tools/request'
import user from './user'
import jobPost from './jobPost'
import company from './company'
import application from './application'
import cvFolder from './cvFolder'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
});

Vue.use(Vuex);
axios.defaults.baseURL = 'http://api.balatar.inpin.co/';
export const store = new Vuex.Store({
    plugins: [vuexLocal.plugin],
    modules: {
            user,jobPost, company, application, cvFolder
        },
        state: {
            token: localStorage.getItem('access_token') || null,
            name: '',
            email: '',
            companyId: '',
            role: '',
            isAdmin: this.role === 'admin',
            position: '',
            image: '',
            isApproved: ''
        },
        getters: {
            loggedIn(state) {
                return state.token !== null
            }
        },
        mutations: {

        },

        actions: {



        },
    });

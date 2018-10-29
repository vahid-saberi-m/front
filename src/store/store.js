import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import request from '../tools/request'
import user from './user'
import jobPost from './jobPost'
import company from './company'
import application from './application'
import cvFolder from './cvFolder'
import event from './event'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
});

Vue.use(Vuex);
axios.defaults.baseURL = 'http://api.balatar.inpin.co/';
export const store = new Vuex.Store({
    plugins: [vuexLocal.plugin],
    modules: {
            user,jobPost, company, application, cvFolder, event
        },
        state: {
            token: localStorage.getItem('access_token') || null,
            loader:''
        },
        getters: {
            loader(state){
                console.log('here',state.loader);
                return state.loader
            },
            loggedIn(state) {
                return state.token !== null
            }
        },
        mutations: {
            LOADER:function (state, payload) {
                state.loader=payload;
                console.log('MUTATION')
            }
        },

        actions: {



        },
    });

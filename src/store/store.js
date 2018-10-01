import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import request from '../tools/request'
import jobPost from './modules/user/jobPost/index'
import company from './modules/user/company/index'
import user from './modules/user/user/index'
import auth from "./modules/auth/auth";
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

Vue.use(Vuex);
export const store = new Vuex.Store({
    modules:{
        jobPost, company, user,auth
    },
    state: {
        items:[],
        token: '',
    },

    getters,
    mutations,
    actions,
});

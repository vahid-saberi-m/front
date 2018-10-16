import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import request from '../tools/request'
import user from './user'
import jobPost from './jobPost'
import company from './company'
import application from './application'
import cvFolder from './cvFolder'

Vue.use(Vuex);
axios.defaults.baseURL = 'http://api.balatar.inpin.co/';
export const store = new Vuex.Store({
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

            retrieveToken(state, token) {
                state.token = token;
                localStorage.setItem('access_token', token)

            },

            userInfo(state, response) {
                state.name = response.data.data.name;
                state.email = response.data.data.email;
                state.companyId = response.data.data.company_id;
                state.role = response.data.data.role;
                state.position = response.data.data.position;
                state.image = response.data.data.image;
                state.isApproved = response.data.data.is_approved;
                // console.log(state.image)
            }
        },

        actions: {

            register(context, credentials) {
                return new Promise((resolve, reject) => {
                    axios.post('/api/user', {
                        name: credentials.name,
                        email: credentials.email,
                        password: credentials.password,
                        password_confirmation: credentials.confirmPassword
                    }).then(response => {
                        resolve(response)
                    })
                        .catch(error => {
                            console.log(error);
                            reject(error)
                        })
                })
            },

        },
    });

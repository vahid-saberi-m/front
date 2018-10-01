import request from "../../../tools/request";
import axios from "axios";


export default {

    state:{
        token: localStorage.getItem('access_token') || null,
    },

    getters:{
        loggedIn(state,getters,rootState) {
            return rootState.token !== null
        },
        retrieveToken(state, token) {
            state.token = token;
            console.log(token);
            localStorage.setItem('access_token',token)
        },
        destroyToken(state) {
            state.token = null
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
    mutations:{

    },

    actions:{
        retrieveToken(context, credentials) {
            return new Promise((resolve, reject) => {
                request.post('/oauth/token', {
                    grant_type: 'password',
                    client_secret: 'LfztswTcawhXhkXydwf4X0YReFcqa5jFlPVoj0eE',
                    client_id: '2',
                    username: credentials.username,
                    password: credentials.password
                }).then(response => {
                    const token = response.data.access_token;
                    localStorage.setItem('access_token', token);
                    context.commit('retrieveToken', token);
                    resolve(token)
                })
                    .catch(error => {
                        console.log(error);
                        reject(error)
                    })
            })
        },

        logOut({ state,getters, commit, rootState }) {
            console.log(rootState.token);
            if (getters.loggedIn) {
                return new Promise((resolve, reject) => {
                    request.post('/api/user/logout')
                        .then(response => {
                            localStorage.removeItem('access_token');
                            commit('destroyToken');
                            resolve(response)
                        })
                        .catch(error => {
                            console.log(axios);
                            reject(error)
                        })
                })
            }
        },

        register(context, credentials) {
            return new Promise((resolve, reject) => {
                request.post('/api/user', {
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

        checkUser(context) {
            return new Promise((resolve, reject) => {
                request.get('/api/user/show').then(response => {
                    console.log(response);
                    context.commit('userInfo', response);
                    resolve(response)
                }).catch(error => {
                    console.log(error);
                    reject(error)
                })
            })
        },
    }
}
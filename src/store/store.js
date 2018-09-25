import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);
axios.defaults.baseURL = 'http://api.balatar.inpin.co/';
export const store = new Vuex.Store({
    state: {

        token: localStorage.getItem('access_token') || null,
        Accept: 'application/json'

    },
    getters: {
        loggedIn(state) {
            return state.token !== null
        }
    },
    mutations: {

        retrieveToken(state, token) {
            state.token = token
        },
        destroyToken(state) {
            state.token = null
        }
    },

    actions: {

        retrieveToken(context, credentials) {
            return new Promise((resolve, reject) => {
                axios.post('/oauth/token', {
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

        logOut(context) {
            axios.defaults.headers.common['Authorization'] = 'Bearer  ' + context.state.token;
            if (context.getters.loggedIn) {
                return new Promise((resolve, reject) => {
                    axios.post('/api/logout')
                        .then(response => {
                            localStorage.removeItem('access_token');
                            context.commit('destroyToken');
                            resolve(response)
                        })
                        .catch(error => {
                            console.log(axios);
                            reject(error)
                        })
                })
            }
        },

        register(context,credentials){
            return new Promise((resolve, reject) => {
                axios.post('/api/users', {
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
        }
    }
});

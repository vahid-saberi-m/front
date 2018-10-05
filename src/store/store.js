import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import request from '../tools/request'
import user from './user'

Vue.use(Vuex);
axios.defaults.baseURL = 'http://api.balatar.inpin.co/';
export const store = new Vuex.Store({
        modules: {
            user
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

        actions: {

            // retrieveToken(context, credentials) {
            //     return new Promise((resolve, reject) => {
            //         request.post('/oauth/token', {
            //             grant_type: 'password',
            //             client_secret: 'LfztswTcawhXhkXydwf4X0YReFcqa5jFlPVoj0eE',
            //             client_id: '2',
            //             username: credentials.username,
            //             password: credentials.password
            //         }).then(response => {
            //             const token = response.data.access_token;
            //             context.commit('retrieveToken', token);
            //             resolve(token)
            //         })
            //             .catch(error => {
            //                 console.log(error);
            //                 reject(error)
            //             })
            //     })
            // },

            logOut(context) {
                axios.defaults.headers.common['Authorization'] = 'Bearer  ' + context.state.token;
                if (context.getters.loggedIn) {
                    return new Promise((resolve, reject) => {
                        axios.post('/api/user/logout')
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

            // checkUser(context) {
            //     axios.defaults.headers.common['Authorization'] = 'Bearer  ' + context.state.token;
            //     return new Promise((resolve, reject) => {
            //         axios.get('/api/user/show').then(response => {
            //             context.commit('userInfo', response);
            //             // console.log();
            //             resolve(response)
            //         }).catch(error => {
            //             console.log(error);
            //             reject(error)
            //         })
            //     })
            // },

            joinCompany(context, credentials) {
                axios.defaults.headers.common['Authorization'] = 'Bearer  ' + context.state.token;
                return new Promise((resolve, reject) => {
                    const fd = new FormData();
                    fd.append('position', credentials.position,);
                    fd.append('image', credentials.image,);
                    axios.post('/api/user/join-company/' + credentials.companyId, fd).then(response => {
                        context.commit('userInfo', {response});
                        resolve(response)
                    })
                        .catch(error => {
                            console.log(error);
                            reject(error)
                        })
                })
            },
            searchCompany(context, payload) {
                return new Promise((resolve, reject) => {
                    axios.get('/api/company/' + payload.companyId).then(response => {
                        resolve(response)
                    })
                        .catch(error => {
                            console.log(error);
                            reject(error)
                        })
                })
            },
            makeCompany(context, credentials) {
                axios.defaults.headers.common['Authorization'] = 'Bearer  ' + context.state.token;
                return new Promise((resolve, reject) => {
                    const fd = new FormData();
                    fd.append('name', credentials.Name);
                    fd.append('company_size', credentials.company_size);
                    fd.append('slogan', credentials.slogan);
                    fd.append('website', credentials.website);
                    fd.append('logo', credentials.logo);
                    fd.append('message_title', credentials.message_title);
                    fd.append('message_content', credentials.message_content);
                    fd.append('main_photo', credentials.main_photo);
                    fd.append('about_us', credentials.about_us);
                    fd.append('why_us', credentials.why_us);
                    fd.append('recruiting_steps', credentials.recruiting_steps);
                    fd.append('address', credentials.address);
                    fd.append('email', credentials.Email);
                    fd.append('phone_number', credentials.phone_number);
                    fd.append('location', credentials.location);
                    axios.post('/api/company', fd).then(response => {
                        resolve(response)
                    })
                        .catch(error => {
                            console.log(error);
                            reject(error)
                        })
                })
            },

            submitNewJobPost(context, credentials) {
                return new Promise((resolve, reject) => {
                    request.post('/api/job-post', {
                        title: credentials.title,
                        description: credentials.description,
                        requirements: credentials.requirements,
                        benefits: credentials.benefits,
                        location: credentials.location,
                        publish_date: credentials.publish_date,
                        expiration_date: credentials.expiration_date,
                    }).then(response => {
                        resolve(response)
                    })
                        .catch(error => {
                            console.log(error);
                            reject(error)
                        })
                })
            },

            getLast5liveJobPost(context) {
                return new Promise((resolve, reject) => {
                    request.get('/api/job-post/last-five')
                        .then(response => {
                            resolve(response)
                        })
                        .catch(error => {
                            console.log(error);
                            reject(error)
                        })
                })
            },
            indexJobPosts(context, address) {
                return new Promise((resolve, reject) => {
                    request.get('/api/job-post/' + address.address)
                        .then(response => {
                            resolve(response)
                        })
                        .catch(error => {
                            console.log(error);
                            reject(error)
                        })
                })

            },

            approveJobPost(context, id) {
                return new Promise((resolve, reject) => {

                    request.get('/api/job-post/approval/' + id)
                        .then(response => {
                            resolve(response)
                        })
                });

            },
            deleteJobPost(context, id) {
                return new Promise((resolve, reject) => {
                    request.delete('/api/job-post/' + id)
                        .then(response => {
                            resolve(response)
                        })
                });
            },
            updateJobPost(context, credentials) {
                return new Promise((resolve, reject) => {
                    request.put('/api/job-post/' + credentials.id, credentials)
                        .then(response => {
                            resolve(response)
                        })
                });
            }

        },
    });

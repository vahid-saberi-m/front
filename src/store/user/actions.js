import request from "../../tools/request";
import axios from "axios";
import * as types from './mutationTypes'

export default {

    retrieveToken(context, credentials) {
        const self = this;
        request.post('/oauth/token', {
            grant_type: 'password',
            client_secret: process.env.CLIENT_SECRET,
            client_id: '2',
            username: credentials.username,
            password: credentials.password
        }).then(response => {
            context.commit(types.RETRIEVE_TOKEN, response.data.access_token);
            // console.log('token', response.data.access_token);
            context.dispatch('checkUser')
        }).catch(error => {
            console.log(error);
        })
    },

    logOut(context) {
        if (context.getters.isLoggedIn) {
                request.post('/api/user/logout')
                    .then(response => {
                        context.commit(types.DESTROY_TOKEN);
                        localStorage.removeItem('access_token');
                    })
                    .catch(error => {
                        console.log(axios);
                    })
        }else {
            console.log('not logged in')
        }
    },

    register(context, credentials) {
            request.post('/api/user', {
                name: credentials.name,
                email: credentials.email,
                password: credentials.password,
                password_confirmation: credentials.confirmPassword
            }).then(response => {

            })
    },

    checkUser(context) {
        request.get('/api/user/show').then(response => {
            context.dispatch('retrieveCompany', response.data.data.company_id);
            context.commit(types.USER_INFO, response);
        }).catch(error => {
            console.log(error);
        })
    },


    updateUser(context,credentials){
        const fd = new FormData();
        fd.append('_method','put');
        fd.append('name',credentials.name);
        fd.append('position',credentials.position);
        if(credentials.image){
            fd.append('image',credentials.image);
        }
        request.post('/api/user/'+credentials.id,fd).then(response => {
            context.commit(types.USER_INFO, response);
        }).catch(error => {
            console.log(error);
        })
    }


}
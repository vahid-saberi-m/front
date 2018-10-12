import request from '@/tools/request'
import axios from "axios";
import * as types from './mutationTypes'

export default {
    joinCompany({context}, credentials) {
        return new Promise((resolve, reject) => {
            const fd = new FormData();
            fd.append('position', credentials.position,);
            fd.append('image', credentials.image,);
            request.post('/api/user/join-company/' + credentials.companyId, fd).then(response => {
                context.commit('userInfo', {response});
                resolve(response)
            })
                .catch(error => {
                    console.log(error);
                    reject(error)
                })
        })
    },
    searchCompany({context}, payload) {
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
            request.post('/api/company', fd).then(response => {
                resolve(response)
            })
                .catch(error => {
                    console.log(error);
                    reject(error)
                })
        })
    },
    retrieveCompany(context,id){
        request.get('/api/company/'+ id)
            .then(response=>{
                context.commit(types.RETRIEVE_COMPANY,response)
            })
    }
};




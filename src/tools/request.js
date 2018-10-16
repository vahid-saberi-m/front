import axios from 'axios'
import router from '@/router'
import _ from 'lodash'

const instance = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 31000,
    headers: {
        Accept: 'application/json'
    }
});

const token = localStorage.getItem('access_token');
if(!_.isNil(token)) {
    instance.defaults.headers.Authorization = 'Bearer ' + token;
}

instance.interceptors.response.use(function (response) {
    return response
}, function (error) {
    if (error.response.status === 401) {
        router.push('/introduction')
    }
})

export default instance
import axios from 'axios'
import router from '@/router'

let headers = {
    Accept: 'application/json',
};

if(localStorage.getItem('access_token')) {
    Object.assign(headers, {Authorization: 'Bearer ' + localStorage.getItem('access_token')});
}
console.log('url', process.env);
const instance = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 31000,
    headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('access_token')
    }
})

instance.interceptors.response.use(function (response) {
    console.log(response);
    return response
}, function (error) {
    if (error.response.status === 401) {
        router.push('/introduction')
    }
})

export default instance
import * as types from './mutationTypes'
import request from '@/tools/request'
import router from '@/router'

export default {
    [types.RETRIEVE_TOKEN]: function (state, token) {
        localStorage.setItem('access_token', token);
        request.defaults.headers.Authorization = 'Bearer ' + token;
        state.token = token;
    },
    [types.DESTROY_TOKEN]: function (state) {
        state.token = null
    },
    [types.USER_INFO]: function (state, response) {
        console.log('here', router);
        Object.assign(state, response.data.data);

        router.push({name: 'userDashboard'});
    }
}

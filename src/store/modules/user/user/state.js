import Vue from 'vue'
import Vuex from 'vuex'
import request from '@/tools/request'

Vue.use(Vuex)
export default {
    state:{
        name: '',
        email: '',
        companyId: '',
        role: '',
        position: '',
        image: '',
        isApproved: ''
    }
}
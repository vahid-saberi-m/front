import _ from 'lodash'

export default {
    isLoggedIn(state) {
        return state.token !== null
    },
    hasApprovedCompany(state) {
        return !_.isNil(state.company_id) && state.is_approved
    },
    userInfo(state){
        return state.user
    },
    isAdmin(state){
        console.log(state.user.role==='admin');
        return state.user.role==='admin'
    }
}
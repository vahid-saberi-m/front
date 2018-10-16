import _ from 'lodash'

export default {
    isLoggedIn(state) {
        console.log('inja',state.token)
        return state.token !== null
    },
    hasApprovedCompany(state) {
        return !_.isNil(state.company_id) && state.is_approved
    },
    userInfo(state){
        return state
    }
}
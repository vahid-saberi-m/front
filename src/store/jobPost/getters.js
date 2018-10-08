import _ from 'lodash'

export default {
    lastFiveJobPosts(state){
        return state.lastFiveJobPosts
    },
    liveJobPosts(state){
        return state.liveJobPosts
    },
    waitingJobPosts(state){
        return state.waitingJobPosts
    },
    expiredJobPosts(state){
        return state.expiredJobPosts
    },
};
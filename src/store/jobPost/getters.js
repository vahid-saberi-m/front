import _ from 'lodash'

export default {
    lastFiveJobPosts(state) {
        return state.lastFiveJobPosts
    },
    liveJobPosts(state) {
        return state.liveJobPosts
    },
    waitingJobPosts(state) {
        return state.waitingJobPosts
    },
    expiredJobPosts(state) {
        return state.expiredJobPosts
    },
    publicJobPosts(state) {
        return state.publicJobPosts
    },
    emailTemplateModal(state) {
        return state.emailTemplateModal
    },
    jobBoardModal(state) {
        return state.jobPostEmailTemplate
    },
    jobPostEmailTemplate(state){
        return state.jobPostEmailTemplate
    }
};

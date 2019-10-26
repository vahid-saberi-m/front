import * as types from "./mutationTypes";
import request from '@/tools/request'
import router from '@/router'
export default {

    [types.LAST_FIVE_JOB_POSTS]: function (state, response) {
        state.lastFiveJobPosts = response.data.data;
    },
    [types.LIVE_JOB_POSTS]: function (state, response) {
        state.liveJobPosts = response.data.data;
    },
    [types.EXPIRED_JOB_POSTS]: function (state, response) {
        state.expiredJobPosts = response.data.data;
    },
    [types.WAITING_JOB_POSTS]: function (state, response) {
        state.waitingJobPosts = response.data.data;
    },
    [types.PUBLIC_JOB_POSTS]: function (state, response) {
        state.publicJobPosts = response.data.data;
    },

  [types.JOB_BOARD_MODAL]: function (state, $payload) {
        state.jobPostEmailTemplate = $payload;
    },
    [types.EMAIL_TEMPLATE_MODAL]: function (state) {
        state.emailTemplateModal = !state.emailTemplateModal;
    },
    [types.JOB_POST_EMAIL_TEMPLATE]: function (state,payload) {
        state.jobPostEmailTemplate = payload;
    },



};

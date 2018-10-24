import * as types from './mutationTypes'
export default {
    [types.RETRIEVE_COMPANY]:function (state, response) {
        state.company= response.data.data;
        state.publicJobPosts=state.company.jobPosts;
        state.events=state.company.events;
        console.log(state.publicJobPosts);
    },
    [types.COMPANY_USERS]:function (state, response) {
        state.companyUsers= response.data.data;
    },
};
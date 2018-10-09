import * as types from './mutationTypes'

export default {
    [types.CV_FOLDER_APPLICATIONS]: function (state, response) {
        state.cvFolderApplications= state.cvFolderApplications.push(response.data.data);
        console.log(state.cvFolderApplications)
    },
    [types.JOB_POST_APPLICATIONS]:function (state, response) {
        state.jobPostApplications= response.data.data
    }
};
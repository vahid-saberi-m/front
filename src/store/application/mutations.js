import * as types from './mutationTypes'

export default {
    [types.CV_FOLDER_APPLICATIONS]: function (state, response) {
        state.cvFolderApplications= state.cvFolderApplications.push(response.data.data);
        console.log(state.cvFolderApplications)
    },
    [types.JOB_POST_APPLICATIONS]:function (state, response) {
        state.jobPostApplications= response.data.data
    },
    [types.DELETE_APPLICATION]:function (state, id) {
        for (var i = 0; i < state.jobPostApplications.length; i++) {
            var obj = state.jobPostApplications[i];

            if (state.jobPostApplications.indexOf(obj.id===id) ) {
                console.log(state.jobPostApplications.indexOf(id));
                state.jobPostApplications.splice(i, 1);
            }
        }
        // state.jobPostApplications.splice({id:117});
        console.log(state.jobPostApplications)
    },
    [types.APPLICATION_DIALOG]:function (state) {
        state.applicationDialog=!state.applicationDialog
    }
};
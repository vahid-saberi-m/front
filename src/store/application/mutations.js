import * as types from './mutationTypes'

export default {
    [types.CV_FOLDER_APPLICATIONS]: function (state, response) {
        state.cvFolderApplications = state.cvFolderApplications.push(response.data.data);
        console.log(state.cvFolderApplications)
    },
    [types.JOB_POST_APPLICATIONS]: function (state, response) {
        state.jobPostApplications = response.data.data
    },
    [types.DELETE_APPLICATION]: function (state, id) {
        for (var i = 0; i < state.jobPostApplications.length; i++) {
            var obj = state.jobPostApplications[i];

            if (state.jobPostApplications.indexOf(obj.id === id)) {
                console.log(state.jobPostApplications.indexOf(id));
                state.jobPostApplications.splice(i, 1);
            }
        }
        console.log(state.jobPostApplications)
    },
    [types.APPLICATION_DIALOG]: function (state) {
        state.applicationDialog = !state.applicationDialog
    },
    [types.APPLY_MODAL]: function (state) {
        state.applyModal = !state.applyModal
    },
    [types.APPLY_JOB_POST]: function (state,jobPost) {
        state.applyJobPost = jobPost
    },
    [types.CHECK_APPLICANT]: function (state,{response,email}) {
        state.candidateEmail=email;
        if (response.data){
            state.candidateExist = response.data.data.candidate;
            state.appliedBefore = response.data.data.applied_before;
            state.candidateInfo = response.data.data;
        }
    },
    [types.NEXT_STEP]:function (state) {
        state.applyStep= state.applyStep+1
    },
    [types.APPLY_JOB_POST_QUESTIONS]: function (state,response) {
        state.applyJobPostQuestions=response.data.data;
        console.log(state.applyJobPostQuestions);
    },
    [types.MOVING_APPLICATION]:function (state,id) {
        state.movingApplication= id
    },
};
import * as types from './mutationTypes'
import _ from 'lodash'
import router from '@/router'


export default {
    [types.CV_FOLDER_APPLICATIONS]: function (state, response) {
        state.cvFolderApplications = state.cvFolderApplications.push(response.data.data);
    },
    [types.JOB_POST_APPLICATIONS]: function (state, response) {
        state.jobPostApplications = response.data.data
    },
    [types.DELETE_APPLICATION]: function (state, id) {
        state.jobPostApplications = state.jobPostApplications.filter(item => item.id !== id);
    },
    [types.APPLICATION_DIALOG]: function (state) {
        state.applicationDialog = !state.applicationDialog;
    },
    [types.APPLY_MODAL]: function (state) {
        state.applyModal = !state.applyModal
    },
    [types.APPLY_JOB_POST]: function (state, jobPost) {
        state.applyJobPost = jobPost
    },
    [types.CHECK_APPLICANT]: function (state, {response, email}) {
        state.candidateEmail = email;
        if (response.data) {
            let appliedBefore = response.data.data.applied_before;
            if (!appliedBefore) {
                state.candidateExist = response.data.data.candidate;
                state.candidateInfo = response.data.data;
                console.log('router');
                router.push({name: 'applyForm'});
            } else {
                console.log(response);
                router.push({name: 'appliedBefore'})
            }
        }
    },
    [types.NEXT_STEP]: function (state) {
        router.push({name: 'appliedSuccessfully'})
    },
    [types.APPLY_JOB_POST_QUESTIONS]: function (state, response) {
        state.applyJobPostQuestions = response.data.data;
    },
    [types.MOVING_APPLICATION]: function (state, id) {
        state.movingApplication = id
    },
    [types.APPLICATION_VIEW_CV]: function (state, response) {
        state.applicationViewCv = response.data.data;
    },
    [types.CHANGE_APPLICATION_CV_FOLDER]: function (state, response) {
        const changingApplication = _.find(state.jobPostApplications, function (application) {
            let id = state.movingApplication;
            return application.id === id;
        });
        changingApplication.cv_folder_id = response.data.cv_folder_id;
    },
    [types.JOB_BOARD_APPLICATIONS]: function (state, cvFolders) {
        let applications = [];
        cvFolders.forEach(function (cvFolder) {
            cvFolder.applications.forEach(function (application) {
                applications.push(application);
            });
        });
        state.jobPostApplications = applications;
    },
    [types.ADD_MORE_APPLICATIONS_TO_CV_FOLDER]: function (state, response) {
        response.data.data.forEach(function (application) {
            state.jobPostApplications.push(application);
        });
    }

};
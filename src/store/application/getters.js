export default {
    cvFolderApplications: (state)=>(cvFolderId)=> {
        let apps= [];
            state.jobPostApplications.forEach(function (item) {
            if (item.cv_folder_id=== cvFolderId){
                apps.push(item)
            }
        });
        return apps
    },
    jobPostApplications(state) {
        return state.jobPostApplications
    },
    applicationDialog(state) {
        return state.applicationDialog
    },
    applyModal(state) {
        return state.applyModal
    },
    applyStep(state) {
        return state.applyStep
    },
    applyJobPost(state) {
        return state.applyJobPost
    },
    appliedBefore(state) {
        return state.appliedBefore
    },
    applicant(state) {
        return state.applicant
    },
    candidateExist(state) {
        return state.candidateExist
    },
    candidateInfo(state) {
        return state.candidateInfo
    },
    candidateEmail(state) {
        return state.candidateEmail
    },
    applyJobPostQuestions(state) {
        return state.applyJobPostQuestions
    },
    movingApplication(state){
        return state.movingApplication
    },
    applicationViewCv(state){
        return state.applicationViewCv
    }

};
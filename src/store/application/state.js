export default {
    token: localStorage.getItem('access_token') || null,
    cvFolderApplications:null,
    jobPostApplications:null,
    applicationDialog:false,
    applyModal:false,
    applyStep:1,
    applyJobPost:null,
    appliedBefore:null,
    applicant:null,
    candidateExist:null,
    candidateInfo:null,
    candidateEmail:null,
    applyJobPostQuestions:null,
    currentCV:null
}
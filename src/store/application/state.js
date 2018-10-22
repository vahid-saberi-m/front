export default {
    token: localStorage.getItem('access_token') || null,
    cvFolderApplications:null,
    jobPostApplications:[],
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
    movingApplication: null,
    applicationViewCv:null
}
import request from '@/tools/request'
import * as types from './mutationTypes'

export default ({
    indexJobPostApplications(context, jobPostId) {
        request.get('/api/job-post/applications/' + jobPostId)
            .then(response => {
                context.commit(types.JOB_POST_APPLICATIONS, response)
            })
    },
    deleteApplication(context, id) {
        // request.delete('/api/applications/'+id)
        //     .then(response=>{
        context.commit(types.DELETE_APPLICATION, id)
        // })
    },
    appliedBefore(context, email) {
        request.post('/api/application/applied-before', {
            email: email
        }).then(response => {
            context.commit(types.APPLIED_BEFORE, response)
        })
    },
    checkApplicant(context, email) {
        request.post('/api/candidate/exists/' + context.getters['applyJobPost'].id, {
            email: email
        }).then(response => {
            context.commit(types.CHECK_APPLICANT, {response,email});
            context.commit(types.NEXT_STEP)
        })
    },
    applyForJob(context, credentials) {
        console.log(context.getters['candidateEmail']);
        const fd = new FormData();
        fd.append('email', context.getters['candidateEmail']);
        fd.append('phone',credentials.phone);
        fd.append('cv',credentials.cv);
        fd.append('name',credentials.name);
        fd.append('company',credentials.company);
        fd.append('position',credentials.position);
        fd.append('experience',credentials.experience);
        fd.append('education',credentials.education);
        fd.append('degree',credentials.degree);
        fd.append('university',credentials.university);
        request.post('api/apply/' + context.getters['applyJobPost'].id, fd)
            .then(response => {
                context.commit(types.NEXT_STEP)
            })
    }
});


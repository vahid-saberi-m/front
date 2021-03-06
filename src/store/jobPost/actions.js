import request from "@/tools/request";
import axios from "axios";
import * as types from './mutationTypes'

export default ({
    getLastFiveJobPosts(context) {
        request.get('/api/job-post/last-five')
            .then(response => {
                context.commit(types.LAST_FIVE_JOB_POSTS,response)
            })
            .catch(error => {
                console.log(error);
            })
    },
    jobBoard(context, jobPostId) {
        request.get('/api/job-post/job-board/' + jobPostId)
            .then(response => {
                context.commit('JOB_POST_EMAIL_TEMPLATE', response.data.data)
                context.commit('JOB_BOARD_CV_FOLDERS', response)
            })
    },
    submitNewJobPost(context, credentials) {
        return new Promise((resolve, reject) => {
            request.post('/api/job-post', {
                title: credentials.title,
                description: credentials.description,
                requirements: credentials.requirements,
                benefits: credentials.benefits,
                location: credentials.location,
                publish_date: credentials.publish_date,
                expiration_date: credentials.expiration_date,
            }).then(response => {
                resolve(response)
            })
                .catch(error => {
                    console.log(error);
                    reject(error)
                })
        })
    },
    waitingJobPosts(context) {
            request.get('/api/job-post/index-waiting')
                .then(response => {
                    context.commit(types.WAITING_JOB_POSTS,response)
                })
                .catch(error => {
                    console.log(error);
                })
    },
    liveJobPosts(context) {
        request.get('/api/job-post/index-live' )
            .then(response => {
                context.commit(types.LIVE_JOB_POSTS,response)
            })
            .catch(error => {
                console.log(error);
            })
    },
    expiredJobPosts(context) {
        request.get('/api/job-post/index-expired')
            .then(response => {
                context.commit(types.EXPIRED_JOB_POSTS,response)
            })
            .catch(error => {
                console.log(error);
            })
    },

    approveJobPost(context, id) {
        return new Promise((resolve, reject) => {

            request.get('/api/job-post/approval/' + id)
                .then(response => {
                    resolve(response)
                })
        });

    },
    deleteJobPost(context, id) {
        return new Promise((resolve, reject) => {
            request.delete('/api/job-post/' + id)
                .then(response => {
                    resolve(response)
                })
        });
    },
    updateJobPost(context, credentials) {
        return new Promise((resolve, reject) => {
            request.put('/api/job-post/' + credentials.id, credentials)
                .then(response => {
                    resolve(response)
                })
        });
    },

    publicJobPosts(context,companyId){
        request.get('/api/job-post/index-public/'+ companyId)
            .then(response=>{
                context.commit(types.PUBLIC_JOB_POSTS,response)
            })
    },
  updateJobPostEmailTemplate(context, payload){
    request.post('/api/job-post/add-email-template/'+ payload.id,payload.template)
      .then(response=>{
        context.commit(types.JOB_POST_EMAIL_TEMPLATE,response.data.data)
      })
  },
    retrieveJobPostRatingFields(context, id){
        request.get('/api/job-post/job-board/job-post-rating-fields/'+id)
            .then(response=>{
                context.commit(types.JOB_POST_RATING_FIELDS,response.data.data)
            })
    },
    addJobPostRatingField(context,payload){
        request.post('/api/job-post/job-board/job-post-rating-fields/'+payload.id, payload.field)
            .then(response=>{
                context.commit(types.ADD_JOB_POST_RATING_FIELDS,response.data.data)
            })
    },
    deleteJpbPostRatingField(context,id){
        request.delete('/api/job-post/job-board/job-post-rating-fields/'+id)
            .then(response=>{
                context.commit(types.JOB_POST_RATING_FIELDS,response.data.data)
            })
    }
});


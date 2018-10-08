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
    }
});


import request from '@/tools/request'
import * as types from './mutationTypes'

export default ({
    indexJobPostApplications(context,jobPostId){
        request.get('/api/job-post/applications/'+jobPostId)
            .then(response=>{
                context.commit(types.JOB_POST_APPLICATIONS,response)
            })
    },
    deleteApplication(context, id){
        // request.delete('/api/applications/'+id)
        //     .then(response=>{
                context.commit(types.DELETE_APPLICATION,id)
            // })
    },
});


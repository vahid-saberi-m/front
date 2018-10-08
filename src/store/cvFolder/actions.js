import request from '@/tools/request'
import * as types from './mutationTypes'

export default ({
    retrieveCvFolders(context,jobPostId){
        request.get('api/cv-folder/job-post/'+jobPostId)
            .then(response=>{
                context.commit(types.RETRIEVE_CV_FOLDERS,response)
            })
    }
});


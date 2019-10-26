import request from '@/tools/request'
import * as types from './mutationTypes'

export default ({
    retrieveCvFolders(context,jobPostId){
        request.get('api/cv-folder/job-post/'+jobPostId)
            .then(response=>{
                context.commit(types.RETRIEVE_CV_FOLDERS,response)
            })
    },
  retrieveCvFolderEmail(context, id){
    request.get('api/cv-folder/email-template/'+id)
      .then(response=>{
        context.commit(types.CV_FOLDER_EMAIL_template,response.data.data.email_template)
      })
  },
  updateCvFolderEmailTemplate(context, payload){
      console.log(payload);
    request.post('api/cv-folder/email-template/'+payload.id, payload.template)
      .then(response=>{
        context.commit(types.CV_FOLDER_EMAIL_template,response.data.data.email_template)
      })
  },
});


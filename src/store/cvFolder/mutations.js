import * as types from "./mutationTypes";
export default {
    [types.RETRIEVE_CV_FOLDERS]:function (context,response) {
        context.cvFolders=response.data.data
    },
     [types.TARGET_CV_FOLDER]:function (context,cvFolderId) {
        context.targetCvFolder=cvFolderId
    },
    [types.JOB_BOARD_CV_FOLDERS]:function (context,response) {
        context.cvFolders=response.data.data.cv_folders;
        this.commit('JOB_BOARD_APPLICATIONS',context.cvFolders)
    },
  [types.CV_FOLDER_EMAIL_template]:function (context,payload) {
        context.emailTemplate=payload;
    },

};

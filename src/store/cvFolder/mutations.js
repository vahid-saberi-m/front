import * as types from "./mutationTypes";
export default {
    [types.RETRIEVE_CV_FOLDERS]:function (context,response) {
        context.cvFolders=response.data.data
    },
     [types.TARGET_CV_FOLDER]:function (context,cvFolderId) {
        context.targetCvFolder=cvFolderId
    },

};
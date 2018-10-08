import * as types from "./mutationTypes";
export default {
    [types.RETRIEVE_CV_FOLDERS]:function (context,response) {
        context.cvFolders=response.data.data
    }
};
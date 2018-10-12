import * as types from './mutationTypes'
export default {
    [types.RETRIEVE_COMPANY]:function (state, response) {
        state.company= response.data.data
    }
};
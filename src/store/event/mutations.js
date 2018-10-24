import * as types from "./mutationTypes";
export default {
    [types.RETRIEVE_EVENTS]:function (state,response) {
        state.events=response.data.data;
    },
    [types.UPDATE_EVENT]:function (state,response) {
        state.events=state.events.filter(item => item.id !== response.data.data.id);
        state.events.push(response.data.data)
    },
    [types.DELETE_EVENT]:function (state,id) {
        state.events=state.events.filter(item => item.id !== id);
    },
};
import request from '@/tools/request'
import * as types from './mutationTypes'

export default ({
    retrieveEvents(context, companyId) {
        request.get('/api/event/index-public/' + companyId)
            .then(response => {
                context.commit(types.RETRIEVE_EVENTS, response)
            })
    },
    createEvent(context, obj) {
        var fd = new FormData();
        fd.append('title',obj.title);
        fd.append('content',obj.content);
        fd.append('main_photo',obj.main_photo);
        request.post('/api/event',fd)
            .then(response=>{
                context.commit(types.UPDATE_EVENT,response)
            })
    },
    editEvent(context, obj) {
        let fd = new FormData();
        fd.append('_method','put');
        fd.append('title',obj.title);
        fd.append('content',obj.content);
        fd.append('main_photo',obj.main_photo);
        request.post('/api/event/'+obj.id,fd)
            .then(response=>{
                context.commit(types.UPDATE_EVENT,response)
            })
    },
    deleteEvent(context,id){
        request.delete('/api/event/'+id).then(response=>{ context.commit(types.DELETE_EVENT,id)})
    }
});
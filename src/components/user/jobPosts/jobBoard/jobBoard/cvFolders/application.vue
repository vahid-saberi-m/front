<template>

    <div draggable class="application"  @drag="setMovingApplication(info)" @click="viewCv(info.id)" >
        <div  class="card-header"  >
            <b>{{info.name}}</b>

            <v-icon class="delete-icon" small @click="deleteApplication(info.id)" >delete</v-icon>
        </div>
      <div class="card-body">
        <div class="">{{info.position}}</div>
        <div class="">{{info.company}}</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "application",
        props:['info'],
        data(){
            return{
                value:true
            }
        },
        methods:{
            setMovingApplication(application) {
                this.$store.dispatch('setMovingApplication', application.id);
                console.log('id' + application.name)
            },
            deleteApplication(id){
                this.$store.dispatch('deleteApplication',id)
            },
            viewCv(id){
                this.$store.commit('JOB_BOARD_MODAL',true);
                console.log('id',id);
                this.$router.push({name: 'cvView', params:{applicationId: id} })
            },

        },

    }
</script>

<style lang="scss" scoped>
  @import "../../../../../../styles/user/jobBoard/cvFolders/application";
</style>

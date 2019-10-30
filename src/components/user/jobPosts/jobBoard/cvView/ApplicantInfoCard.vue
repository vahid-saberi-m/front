<template>
    <div  class="application"   >
        <div  class="card-header" @click="viewCv(applicationViewCv.id)" >
            <b>{{applicationViewCv.name}}</b>

            <v-icon class="delete-icon" small @click="deleteApplication(applicationViewCv.id)" >delete</v-icon>
        </div>
        <div class="card-body">
            <div class="">{{applicationViewCv.position}}</div>
            <div class="">{{applicationViewCv.company}}</div>
        </div>
    </div>

</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "ApplicantapplicationViewCvCard",

        computed: {

            ...mapGetters(['applicationViewCv']),
        },
        created(){
                this.$store.commit('MOVING_APPLICATION',this.applicationViewCv.id)
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../../../styles/user/jobBoard/cvView/ApplicationInfoCard";
</style>

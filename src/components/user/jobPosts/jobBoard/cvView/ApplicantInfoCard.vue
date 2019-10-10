<template>
    <div draggable class="application"  @drag="setMovingApplication(applicationViewCv)"  >
        <div  class="card-header" @click="viewCv(applicationViewCv.id)" >
            <b>{{applicationViewCv.name}}</b>

            <v-icon class="delete-icon" small @click="deleteApplication(applicationViewCv.id)" >delete</v-icon>
        </div>
        <div class="card-body">
            <div class="">{{applicationViewCv.position}}</div>
            <div class="">{{applicationViewCv.company}}</div>
        </div>
    </div>
    <!--<v-card>-->
        <!--<v-card-text>-->
            <!--<v-layout row>-->
                <!--<v-flex xs6>-->
                    <!--<b>{{applicationViewCv.name}}</b>-->
                <!--</v-flex>-->

                <!--<v-flex xs6>-->
                    <!--<b>{{applicationViewCv.company}}</b>-->
                <!--</v-flex>-->
            <!--</v-layout>-->
            <!--<v-divider></v-divider>-->
            <!--<v-layout row>-->
                <!--<v-flex xs6>-->
                    <!--<p>{{applicationViewCv.degree}},{{applicationViewCv.education}}</p>-->
                <!--</v-flex>-->

                <!--<v-flex xs6>-->
                    <!--<small>سمت:</small>-->
                    <!--<p>{{applicationViewCv.position}}</p>-->
                <!--</v-flex>-->
            <!--</v-layout>-->
        <!--</v-card-text>-->
    <!--</v-card>-->
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
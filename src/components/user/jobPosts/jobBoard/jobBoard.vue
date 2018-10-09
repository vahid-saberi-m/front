<template>
    <v-container v-on:open-application="openCvView">
        <user-header></user-header>
        <cvView :dialog="dialog" ></cvView>
        <v-layout row wrap>
            <template v-for="cvFolder in cvFolders">
                <cv-folder :name="cvFolder.name" :id="cvFolder.id" :jobPostApplications="jobPostApplications" :key="cvFolder.id" ></cv-folder>
            </template>
        </v-layout>
    </v-container>
</template>

<script>
    import {mapGetters} from 'vuex'
    import UserHeader from "../../userHeader";
    import CvFolder from "./cvFolder";
    import cvView from "./cvView"
    import application from './application'

    export default {
        name: "jobBoard",
        components: {CvFolder, UserHeader,cvView,application},
        data() {
            return {
                id: this.$route.params.id,
                dialog: false
            }
        },
        computed: {
            ...mapGetters(['cvFolders','jobPostApplications'])
        },
        created() {
            this.$store.dispatch('retrieveCvFolders', this.id);
            this.$store.dispatch('indexJobPostApplications',this.id);
        },
        methods:{
            openCvView(){
                // this.dialog=true;
                    console.log(2)
            },
        }
    }
</script>

<style scoped>

</style>
<template>
    <v-container>
        <user-header></user-header>
        <v-layout row wrap>
            <template v-for="cvFolder in cvFolders">
                <cv-folder :name="cvFolder.name" :id="cvFolder.id" :jobPostApplications="jobPostApplications" :key="cvFolder.id"></cv-folder>
            </template>
        </v-layout>
    </v-container>
</template>

<script>
    import {mapGetters} from 'vuex'
    import UserHeader from "../../userHeader";
    import CvFolder from "./cvFolder";

    export default {
        name: "jobBoard",
        components: {CvFolder, UserHeader},
        data() {
            return {
                id: this.$route.params.id,
            }
        },
        computed: {
            ...mapGetters(['cvFolders','jobPostApplications'])
        },
        created() {
            this.$store.dispatch('retrieveCvFolders', this.id);
            this.$store.dispatch('indexJobPostApplications',this.id);
            console.log(this.$store.getters.jobPostApplications)

        },
    }
</script>

<style scoped>

</style>
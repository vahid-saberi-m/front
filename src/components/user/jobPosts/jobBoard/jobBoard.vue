<template>
    <v-container>
        <user-header></user-header>
        <v-layout row wrap>
            <template v-for="cvFolder in cvFolders">
                <cv-folder :name="cvFolder.name" :id="cvFolder.id"></cv-folder>
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
            ...mapGetters(['cvFolders'])
        },
        created() {
            this.$store.dispatch('retrieveCvFolders', this.id)
        },
    }
</script>

<style scoped>

</style>
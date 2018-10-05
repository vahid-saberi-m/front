<template>
    <v-container  >
        <user-header></user-header>
        <v-form>

        <v-card v-for="jobPost in jobPosts" style="direction: rtl;" :key="jobPost.id" v-on:removeJobPost="removeJobPost">
            <job-post-show :jobPost="jobPost" :postState="postState" v-if="!(jobPost.id === removedJobPost)"></job-post-show>

            <v-card-text>
            </v-card-text>
        </v-card>
        </v-form>
    </v-container>
</template>

<script>
    import UserHeader from "../userHeader";
    import jobPostShow from "./jobPostCard/jobPostShow"

    export default {
        name: "waitingPosts",
        components: {jobPostShow, UserHeader},
        data() {
            return {
                jobPosts: '',
                removedJobPost:'',
                postState:'isWaiting'
            }
        },
        mounted() {
            this.$store.dispatch('indexJobPosts', {address: 'index-waiting'})
                .then(response => {
                    this.jobPosts = response.data.data;
                })
        },
        methods:{
            removeJobPost(id){
                console.log(id)
                this.removedJobPost=id
            }
        }


    }
</script>

<style scoped>

</style>
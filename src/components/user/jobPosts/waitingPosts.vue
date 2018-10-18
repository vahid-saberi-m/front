<template>
    <v-container>
        <v-form>

            <v-card v-for="jobPost in waitingJobPosts" style="direction: rtl;" :key="jobPost.id"
                    v-on:removeJobPost="removeJobPost">
                <job-post-show :jobPost="jobPost" :postState="postState"
                               v-if="!(jobPost.id === removedJobPost)"></job-post-show>

                <v-card-text>
                </v-card-text>
            </v-card>
        </v-form>
    </v-container>
</template>

<script>
    import jobPostShow from "./jobPostCard/jobPostShow"
    import {mapGetters} from 'vuex'

    export default {
        name: "waitingPosts",
        components: {jobPostShow},
        data() {
            return {
                removedJobPost: '',
                postState: 'isWaiting'
            }
        },
        computed: {
            ...mapGetters(['waitingJobPosts'])
        },
        mounted() {
            this.$store.dispatch('waitingJobPosts')
        },
        methods: {
            removeJobPost(id) {
                console.log(id);
                this.removedJobPost = id
            }
        }


    }
</script>

<style scoped>

</style>
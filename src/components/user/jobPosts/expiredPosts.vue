<template>
    <v-container  >
        <v-form>

            <v-card v-for="jobPost in expiredJobPosts" style="direction: rtl;" :key="jobPost.id" v-on:removeJobPost="removeJobPost">
                <job-post-show :jobPost="jobPost" :postState="postState" v-if="!(jobPost.id === removedJobPost)"></job-post-show>
                <v-card-text>
                </v-card-text>
            </v-card>
        </v-form>
    </v-container>
</template>

<script>

    import jobPostShow from './jobPostCard/jobPostShow'
    import jobPostEdit from './jobPostCard/jobPostEdit'
    import {mapGetters} from 'vuex'

    export default {
        name: "expiredPosts",
        components: { jobPostShow, jobPostEdit},
        computed:{
            ...mapGetters(['expiredJobPosts'])
        },
        data() {
            return {
                removedJobPost:'',
                postState:'live'
            }
        },
        mounted() {
            this.$store.dispatch('expiredJobPosts')
        },
        methods:{
            removeJobPost(id){
                this.removedJobPost=id
            }
        }
    }
</script>

<style scoped>

</style>
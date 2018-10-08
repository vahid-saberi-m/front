<template>
    <v-container  >
        <user-header></user-header>
        <v-form>

            <v-card v-for="jobPost in liveJobPosts" style="direction: rtl;" :key="jobPost.id" v-on:removeJobPost="removeJobPost">
                <job-post-show :jobPost="jobPost" :postState="postState" v-if="!(jobPost.id === removedJobPost)"></job-post-show>
                <v-card-text>
                </v-card-text>
            </v-card>
        </v-form>
    </v-container>

</template>

<script>
    import UserHeader from "../userHeader";
    import jobPostShow from './jobPostCard/jobPostShow'
    import jobPostEdit from './jobPostCard/jobPostEdit'
    import {mapGetters} from 'vuex'
    export default {
        name: "livePosts",
        components: {UserHeader, jobPostShow, jobPostEdit},
        computed:{
            ...mapGetters(['liveJobPosts'])
        },
        data() {
            return {
                removedJobPost:'',
                postState:'live'

            }
        },
        mounted() {
            this.$store.dispatch('liveJobPosts')
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
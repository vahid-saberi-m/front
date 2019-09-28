<template>
    <div class="job-posts">
            <v-expansion-panels class="card" v-for="jobPost in liveJobPosts" :key="jobPost.id" v-on:removeJobPost="removeJobPost">
                <job-post-show :jobPost="jobPost" :postState="postState" v-if="!(jobPost.id === removedJobPost)"></job-post-show>
            </v-expansion-panels>
    </div>

</template>

<script>
    import jobPostShow from './jobPostCard/jobPostShow'
    import jobPostEdit from './jobPostCard/jobPostEdit'
    import {mapGetters} from 'vuex'
    export default {
        name: "livePosts",
        components: { jobPostShow, jobPostEdit},
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

<style lang="scss" scoped>
  .job-posts{
    margin: 10vh 20vw 0 20vw;

  }
</style>

<template>
        <v-card class="job-posts-container">
            <v-card-title>
                    <b>
                        موقعیت های شغلی:
                    </b>
            </v-card-title>
            <div class="job-posts">
                <div class="no-jobpost" v-if="jobPosts.length===0">
                    در حال حاضر موقعیت شغلی خاصی در مجموعه ما وجود ندارد.
                </div>
                    <jobPostShow v-for="jobPost in jobPosts" :key="jobPost.id" :jobPostInfo="jobPost" ></jobPostShow>
            </div>
        </v-card>
</template>

<script>
    import jobPostShow from './jobPostCard/jobPostShow'
    import {mapGetters} from 'vuex'

    export default {
        name: "jobPosts",
        props: ['companyId', 'jobPosts'],
        components: {jobPostShow},
        data() {
            return {
                id: this.companyId,
            }
        },
        mounted() {
        },
    }
</script>

<style lang="scss" scoped>
  @import "../../../styles/public/jobPosts/jobPosts";

</style>

<template>
    <v-content>
        <v-card>
            <v-card-title>
                <h5>
                    <b>
                        موقعیت های شغلی:
                    </b>
                </h5>
            </v-card-title>
            <v-card-text>
                <div class="no-jobpost" v-if="jobPosts.length===0">
                    در حال حاضر موقعیت شغلی خاصی در مجموعه ما وجود ندارد.
                </div>
                <v-card v-for="jobPost in jobPosts" :key="jobPost.id">
                    <jobPostShow :jobPostInfo="jobPost" :key="jobPost.id"></jobPostShow>
                </v-card>
            </v-card-text>
        </v-card>
    </v-content>
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

<style scoped>
    .no-jobpost {
        text-align: center;
        font-weight: bold;
        font-size: large;
    }
</style>

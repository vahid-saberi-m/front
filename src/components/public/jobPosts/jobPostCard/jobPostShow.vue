<template>
    <div>

        <v-expansion-panel dark inset focusable class="job-post"
        >
            <v-expansion-panel-content
            >
                <template>
                    <slot slot="header">
                        <v-card-title>
                            <b>{{jobPostInfo.title}}</b>
                        </v-card-title>
                        <v-spacer></v-spacer>
                    </slot>
                    <div class="job-post-content">
                        <v-card-title>
                        </v-card-title>
                        <div>

                                <div class="card">
                                    <div class="label">
                                        <h6>
                                        شرح شغل
                                        </h6>
                                    </div>
                                    <v-container>
                                        <div class="content">
                                            {{jobPostInfo.description}}
                                        </div>
                                    </v-container>

                                </div>
                                <v-divider></v-divider>
                                <div class="card">
                                    <div>
                                        <h6>
                                                ویژگی های مورد نیاز
                                        </h6>
                                    </div>
                                    <v-container>
                                        <div>
                                            {{jobPostInfo.requirements}}
                                        </div>
                                    </v-container>
                                </div>
                                <v-divider></v-divider>
                                <div class="card">
                                    <div>
                                        <h6>
                                        حقوق و مزایای در نظر گرفته شده:
                                        </h6>
                                    </div>
                                    <v-container>
                                        <div>
                                            {{jobPostInfo.benefits}}
                                        </div>
                                    </v-container>
                                </div>
                                <hr>
                                <v-container row wrap align-center>
                                    <v-flex class="text-xs-center">
                                        <v-btn color="blue" dark @click.prevent="apply(jobPostInfo)">ارسال رزومه</v-btn>

                                    </v-flex>
                                </v-container>

                        </div>
                    </div>
                </template>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </div>
</template>

<script>

    export default {
        components: {},
        data() {
            return {};
        },
        mounted() {
        },
        name: "jobPostShow",
        props: ['jobPostInfo'],
        methods: {
            apply(jobPost) {
                this.$store.commit('APPLY_JOB_POST', jobPost);
                this.$store.commit('APPLY_MODAL');
                this.$router.replace({name: 'checkApplicant', params: jobPost.id})
            }
        }

    }
</script>

<style lang="scss" scoped>
  @import "../../../../styles/public/jobPosts/jobPostCard/jobPostShow.scss";

</style>

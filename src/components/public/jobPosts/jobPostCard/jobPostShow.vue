<template>
    <div>

        <v-expansion-panel dark inset focusable
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
                    <v-card >
                        <v-card-title>
                        </v-card-title>
                        <v-card-text>
                            <v-card-text
                                    name="input-7-1"
                                    label="شرح موقعیت شغلی"
                                    :value=jobPostInfo.description
                                    hint=""
                                    append-icon="edit"
                                    class="text-xs-right"

                            >
                                <v-card>
                                    <v-card-title>
                                        <h6>
                                        شرح شغل
                                        </h6>
                                    </v-card-title>
                                    <v-container>
                                        <v-card-text>
                                            {{jobPostInfo.description}}
                                        </v-card-text>
                                    </v-container>

                                </v-card>
                                <v-divider></v-divider>
                                <v-card>
                                    <v-card-title>
                                        <h6>
                                                ویژگی های مورد نیاز
                                        </h6>
                                    </v-card-title>
                                    <v-container>
                                        <v-card-text>
                                            {{jobPostInfo.requirements}}
                                        </v-card-text>
                                    </v-container>
                                </v-card>
                                <v-divider></v-divider>
                                <v-card>
                                    <v-card-title>
                                        <h6>
                                        حقوق و مزایای در نظر گرفته شده:
                                        </h6>
                                    </v-card-title>
                                    <v-container>
                                        <v-card-text>
                                            {{jobPostInfo.benefits}}
                                        </v-card-text>
                                    </v-container>
                                </v-card>
                                <hr>
                                <v-container row wrap align-center>
                                    <v-flex class="text-xs-center">
                                        <v-btn color="blue" dark @click="apply(jobPostInfo)">ارسال رزومه</v-btn>

                                    </v-flex>
                                </v-container>
                            </v-card-text>
                        </v-card-text>
                    </v-card>
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
                this.$router.push({name: 'checkApplicant', params: jobPost.id})
            }
        }

    }
</script>

<style scoped>

</style>
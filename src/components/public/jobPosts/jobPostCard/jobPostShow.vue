<template>
    <div>

        <v-expansion-panel
        >
            <v-expansion-panel-content
            >
                <template>
                    <slot slot="header">
                        {{jobPostInfo.title}}
                        <v-spacer></v-spacer>
                    </slot>
                    <v-card>
                        <v-card-title>
                        </v-card-title>
                        <v-card-text>
                            <v-card-text
                                    name="input-7-1"
                                    label="شرح موقعیت شغلی"
                                    :value=jobPostInfo.description
                                    hint=""
                                    append-icon="edit"
                            >
                                <v-card>
                                    <v-card-title>
                                        شرح شغل
                                    </v-card-title>
                                    <v-card-text>
                                        {{jobPostInfo.description}}
                                    </v-card-text>

                                </v-card>

                                <v-card>
                                    <v-card-title>
                                        ویژگی های مورد نیاز
                                    </v-card-title>
                                    <v-card-text>
                                        {{jobPostInfo.requirements}}
                                    </v-card-text>
                                </v-card>

                                <v-card>
                                    <v-card-title>
                                        حقوق و مزایای در نظر گرفته شده:
                                    </v-card-title>
                                    <v-card-text>
                                        {{jobPostInfo.benefits}}
                                    </v-card-text>
                                </v-card>
                                <v-card>
                                    <v-card-title>
                                        محل کار:
                                    </v-card-title>
                                    <v-card-text>
                                        {{jobPostInfo.location}}
                                    </v-card-text>
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
            return {
            };
        },
        mounted() {
        },
        name: "jobPostShow",
        props: {jobPostInfo:Object },
        methods:{
            apply(jobPost){
                this.$store.commit('APPLY_JOB_POST',jobPost);
                this.$store.commit('APPLY_MODAL')
            }
        }

    }
</script>

<style scoped>

</style>
<template>
    <div v-if="show">
        <v-text-field v-model="title">
            {{jobPost.title}}
        </v-text-field>
        <v-card>
            <v-card-text>
                <v-card-text>
                    <v-icon @click="">assignment</v-icon>

                        <v-card>
                            <v-card-title>
                                شرح شغل
                            </v-card-title>
                            <v-text-field :value="jobPost.description">
                            </v-text-field>

                        </v-card>

                        <v-card>
                            <v-card-title>
                                ویژگی های مورد نیاز
                            </v-card-title>
                            <v-textarea
                            :value="jobPost.requirements"
                            >
                            </v-textarea>
                        </v-card>

                        <v-card>
                            <v-card-title>
                                حقوق و مزایای در نظر گرفته شده:
                            </v-card-title>
                            <v-textarea :value="jobPost.benefits">
                            </v-textarea>
                        </v-card>
                        <v-card>
                            <v-card-title>
                                محل کار:
                            </v-card-title>
                            <v-combobox
                                    v-model="location"
                                    :items="cities"
                                    :value="jobPost.location"
                                    label="محل کار (شهر یا استان)"
                            ></v-combobox>
                        </v-card>
                        <v-container row wrap align-center>
                            <v-card>
                                <v-card-title>
                                    تاریخ انتشار:
                                </v-card-title>
                                <v-card-text>
                                    <v-date-picker v-model="jobPost.publish_date" locale="fa-ir" readonly
                                                   color="blue"></v-date-picker>
                                </v-card-text>
                            </v-card>
                            <v-spacer></v-spacer>
                            <v-card>
                                <v-card-title>
                                    تاریخ انقضا:
                                </v-card-title>
                                <v-card-text>
                                    <v-date-picker v-model="jobPost.expiration_date" locale="fa-ir" readonly
                                                   color="red"></v-date-picker>
                                </v-card-text>
                            </v-card>
                        </v-container>
                        <hr>
                        <v-container row wrap align-center>
                            <v-flex class="text-xs-center">
                                <v-btn color="yellow"  @click="updateJobPost(jobPost.id)">ویرایش</v-btn>
                                <v-btn color="red" dark @click="deleteJobPost(jobPost.id)">حذف</v-btn>
                            </v-flex>
                        </v-container>
                </v-card-text>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    export default {
        components: {},
        data() {
            return {
                isAdmin: '',
                role: '',
                show: true,
                title: '',
                description: '',
                requirements: '',
                benefits: '',
                location: '',
                publish_date: '',
                expiration_date: '',
                cities: ['کیش', 'شیراز', 'مشهد', 'اصفهان', 'تهران']
            };
        },
        mounted() {
            this.isAdmin = (this.$store.state.role === 'admin')
        },
        name: "jobPostEdit",
        props: ['jobPost'],
        methods: {
            updateJobPost(id) {
                this.$store.dispatch('updateJobPost', id)
                    .then(response => {
                    })
            },
        },

    }
</script>

<style scoped>

</style>
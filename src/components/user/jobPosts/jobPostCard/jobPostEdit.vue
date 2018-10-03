<template>
    <v-card v-if="show">
        <v-card-title>
            <v-spacer></v-spacer>
            <v-icon @click="editOff">assignment</v-icon>
        </v-card-title>
        <v-card-content>
            <v-card>
                <v-card-text>
                    <v-card-text>

                        <v-card>
                            <v-card-title>
                                عنوان شغل:
                            </v-card-title>
                            <v-text-field v-model="title" :value="jobPost.title">
                            </v-text-field>
                        </v-card>
                        <v-card>
                            <v-card-title>
                                شرح شغل
                            </v-card-title>
                            <v-text-field :value="jobPost.description" v-model="description">
                            </v-text-field>

                        </v-card>

                        <v-card>
                            <v-card-title>
                                ویژگی های مورد نیاز
                            </v-card-title>
                            <v-textarea
                                    :value="jobPost.requirements"
                                    v-model="requirements"
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
                                    <v-date-picker v-model="publish_date" locale="fa-ir"
                                                   color="blue"></v-date-picker>
                                </v-card-text>
                            </v-card>
                            <v-spacer></v-spacer>
                            <v-card>
                                <v-card-title>
                                    تاریخ انقضا:
                                </v-card-title>
                                <v-card-text>
                                    <v-date-picker v-model="expiration_date" locale="fa-ir"
                                                   color="red"></v-date-picker>
                                </v-card-text>
                            </v-card>
                        </v-container>
                        <hr>
                        <v-container row wrap align-center>
                            <v-flex class="text-xs-center">
                                <v-btn color="yellow" @click="updateJobPost(jobPost.id)">ویرایش</v-btn>
                                <v-btn color="red" dark @click="deleteJobPost(jobPost.id)">حذف</v-btn>
                            </v-flex>
                        </v-container>
                    </v-card-text>
                </v-card-text>
            </v-card>
        </v-card-content>
    </v-card>
</template>

<script>
    export default {
        components: {},
        data() {
            return {
                isAdmin: '',
                role: this.jobPost.role,
                show: true,
                title: this.jobPost.title,
                description: this.jobPost.description,
                requirements: this.jobPost.requirements,
                benefits: this.jobPost.benefits,
                location: this.jobPost.location,
                publish_date: this.jobPost.publish_date,
                expiration_date: this.jobPost.expiration_date,
                cities: ['کیش', 'شیراز', 'مشهد', 'اصفهان', 'تهران']
            };
        },
        mounted() {
            this.isAdmin = (this.$store.state.role === 'admin')
        },
        name: "jobPostEdit",
        props: ['jobPost'],
        methods: {
            editOff() {
                this.$emit('editOff')
            },
            updateJobPost(id) {
                this.$store.dispatch('updateJobPost', {
                    id: id,
                    role: this.role,
                    title: this.title,
                    description: this.description,
                    requirements: this.requirements,
                    benefits: this.benefits,
                    location: this.location,
                    publish_date: this.publish_date,
                    expiration_date: this.expiration_date,
                })
                    .then(response => {
                        this.$emit('editOff')
                    })
            },
        },

    }
</script>

<style scoped>

</style>
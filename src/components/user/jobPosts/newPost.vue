<template>
    <div>
        <v-container>

            <user-header></user-header>
            <v-card style="direction: rtl" tile>
                <v-card-title primary-title>
                    <h3 class="headline mb-0">آگهی شغلی جدید:</h3>
                </v-card-title>
                <v-card-text>
                    <v-card>
                        <v-card-text >
                            <v-form v-model="valid" style="direction: rtl">
                                <v-text-field
                                        v-model="title"
                                        :counter="10"
                                        label="عنوان شغلی"
                                        required
                                ></v-text-field>


                                    <v-combobox
                                            v-model="location"
                                            :items="cities"
                                            label="محل کار (شهر یا استان)"
                                    ></v-combobox>
                                <v-textarea
                                        name="input-7-1"
                                        label="شرح شغل:"
                                        value=""
                                        hint=""
                                        v-model="description"
                                ></v-textarea>

                                <v-textarea
                                        name="input-7-1"
                                        label="ویژگی های مورد نیاز:"
                                        value=""
                                        hint=""
                                        v-model="requirements"
                                ></v-textarea>

                                <v-textarea
                                        name="input-7-1"
                                        label="مزایا:"
                                        value=""
                                        hint="چه حقوق و مزایایی برای این کار در نظر گرفته اید"
                                        v-model="benefits"
                                ></v-textarea>
                                <v-card><v-card-title>
                                    تاریخ انتشار
                                </v-card-title>
                                <v-card-text>

                                <v-date-picker v-model="publish_date"
                                               locale="fa-AF"
                                               header-color="green"

                                ></v-date-picker>

                                <v-date-picker v-model="expiration_date"
                                               locale="fa-AF"
                                               header-color="blue"
                                ></v-date-picker>

                                </v-card-text>
                                </v-card>
                            </v-form>
                        </v-card-text>
                        <v-btn color="green" type="submit" dark @click.native="submit">
                            درج آگهی
                        </v-btn>
                    </v-card>
                </v-card-text>

            </v-card>
        </v-container>
    </div>


</template>

<script>
    import UserHeader from "../userHeader";

    export default {
        name: "newPost",
        components: { UserHeader},
        data() {
            return {
                title: '',
                description: '',
                requirements: '',
                benefits: '',
                location: '',
                publish_date: '',
                expiration_date: '',
                cities:['کیش','شیراز','مشهد','اصفهان','تهران']
            }
        },

        methods:{
            submit:function () {
                this.$store.dispatch('submitNewJobPost',{
                    title:this.title,
                    description:this.description,
                    requirements:this.requirements,
                    benefits:this.benefits,
                    location:this.location,
                    publish_date:this.publish_date,
                    expiration_date:this.expiration_date,
                }).then(response=>{
                    this.$router.push('/waitingPosts')
                })
            }
        }
    }

</script>

<style scoped>

</style>
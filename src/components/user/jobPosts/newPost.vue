<template>
    <div>
        <v-container>

            <v-card style="direction: rtl" tile>
                <v-card-title primary-title>
                    <h3 class="headline mb-0">آگهی شغلی جدید:</h3>
                </v-card-title>
                <v-card-text>
                    <v-card>
                        <v-card-text >
                            <form  style="direction: rtl">
                                <v-text-field
                                        v-model="title"
                                        :counter="10"
                                        label="عنوان شغلی"
                                        v-validate="'required|max:10'"
                                        :error-messages="errors.collect('title')"
                                        data-vv-name="title"
                                        name="title"
                                        required
                                ></v-text-field>

                                    <v-select
                                            v-model="location"
                                            :items="cities"
                                            label="محل کار (شهر یا استان)"
                                            required

                                    ></v-select>
                                <v-textarea
                                        name="input-7-1"
                                        label="شرح شغل:"
                                        v-model="description"
                                        v-validate="'required|max:100'"
                                        :counter="100"
                                        :error-messages="errors.collect('description')"
                                        data-vv-name="description"


                                ></v-textarea>

                                <v-textarea
                                        name="input-7-1"
                                        label="ویژگی های مورد نیاز:"
                                        value=""
                                        hint=""
                                        v-model="requirements"
                                        v-validate="'required|max:100'"
                                        :counter="100"
                                        :error-messages="errors.collect('requirements')"
                                        data-vv-name="requirements"
                                ></v-textarea>

                                <v-textarea
                                        name="input-7-1"
                                        label="مزایا:"
                                        value=""
                                        hint="چه حقوق و مزایایی برای این کار در نظر گرفته اید"
                                        v-model="benefits"
                                        v-validate="'required|max:100'"
                                        :counter="100"
                                        :error-messages="errors.collect('benefits')"
                                        data-vv-name="benefits"
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
                            </form>
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

    export default {
        $_veeValidate: {
            validator: 'new'
        },
        name: "newPost",
        components: { },
        data() {

            return {
                title: '',
                description: '',
                requirements: '',
                benefits: '',
                location: '',
                publish_date: '',
                expiration_date: '',
                cities:['کیش','شیراز','مشهد','اصفهان','تهران'],
                dictionary: {
                    attributes: {
                        email: 'E-mail Address'
                        // custom attributes
                    },
                    custom: {
                        title: {
                            required: () => 'عنوان شغلی الزامی است',
                            max: 'حداکثر حروف مجاز را رعایت فرمایید. '
                        },
                        description: {
                            required: () => 'پرکردن این فیلد الزامی است',
                            max: 'حداکثر حروف مجاز را رعایت فرمایید. '
                        },
                        requirements: {
                            required: () => 'پرکردن این فیلد الزامی است',
                            max: 'حداکثر حروف مجاز را رعایت فرمایید. '
                        },
                        benefits: {
                            required: () => 'پرکردن این فیلد الزامی است',
                            max: 'حداکثر حروف مجاز را رعایت فرمایید. '
                        },

                    }
                }

            }
        },
        mounted(){
            this.$validator.localize('fa', this.dictionary)
        },
        methods:{
            submit:function () {
                if(this.$validator.validate()){
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
                })}
            }
        }
    }

</script>

<style scoped>

</style>
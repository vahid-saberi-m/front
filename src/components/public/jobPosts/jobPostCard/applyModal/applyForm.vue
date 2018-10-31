<template>
    <div>

        <v-card-text>
            لطفا اطلاعات خواسته شده را وارد نمایید:
            <v-form>
                <v-container>
                    <v-layout row wrap>

                        <v-flex xs12 sm6 md6>
                            <v-text-field type="number" outeline="true" v-model="phone"
                                          label="شماره تماس" box>
                            </v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <input type="file" accept="application/pdf" @change="onCvSelected"
                                          label="رزومه">
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field outeline="true" v-model="name" label="نام و نام خانوادگی"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field outeline="true" v-model="company" label="محل کار"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field outeline="true" v-model="position" label="سمت فعلی"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field outeline="true" type="number" v-model="experience" label="سابقه فعالیت (سال)"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field outeline="true" v-model="education" label="رشته تحصیلی"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field outeline="true" v-model="degree" label="مقطع"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field outeline="true" v-model="university" label="دانشگاه محل تحصیل"
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                </v-container>
                <v-btn
                        @click="applyForJob()"
                >ارسال
                </v-btn>
            </v-form>
        </v-card-text>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "applyForm",
        computed: {
            ...mapGetters(['candidateInfo'])
        },
        data() {
            return {
                phone: null,
                cv: null,
                name: null,
                company: null,
                position: null,
                experience: null,
                education: null,
                degree: null,
                university: null,
            }
        },
        methods: {
            onCvSelected() {
                this.cv = event.target.files[0];
                console.log('cv selected')
            },
            applyForJob() {
                this.$store.dispatch('applyForJob', {
                    phone: this.phone,
                    cv: this.cv,
                    name: this.name,
                    company: this.company,
                    position: this.position,
                    experience: this.experience,
                    education: this.education,
                    degree: this.degree,
                    university: this.university,
                })
            }
        },
        created() {
            if(this.candidateInfo){
                this.phone = this.candidateInfo.phone;
                this.cv = this.candidateInfo.cv;
                this.name = this.candidateInfo.name;
                this.company = this.candidateInfo.company;
                this.position = this.candidateInfo.position;
                this.experience = this.candidateInfo.experience;
                this.education = this.candidateInfo.education;
                this.degree = this.candidateInfo.degree;
                this.university = this.candidateInfo.university;
            }

        }
    }
</script>

<style scoped>

</style>
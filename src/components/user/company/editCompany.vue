<template>
    <v-container>

        <v-card style="direction: rtl" tile>
            <v-card-title primary-title>
                <h3 class="headline mb-0">ویرایش وبسایت استخدامی:</h3>
            </v-card-title>
            <v-card-text>
                <v-card>
                    <v-card-text>
                        <v-form style="direction: rtl">
                            <v-layout row wrap>
                                <v-flex xs6>
                                    <v-card xs6>
                                        <v-card-text>
                                            <v-text-field
                                                    box
                                                    v-model="name"
                                                    :counter="10"
                                                    label="نام شرکت"
                                                    required
                                            ></v-text-field>

                                            <v-text-field
                                                    box
                                                    v-model="email"
                                                    :counter="10"
                                                    label="ایمیل شرکت"
                                                    required
                                            ></v-text-field>
                                            <v-text-field
                                                    box
                                                    v-model="address"
                                                    :counter="10"
                                                    label="آدرس شرکت"
                                                    required
                                            ></v-text-field>

                                        </v-card-text>
                                    </v-card>
                                </v-flex>

                                <v-flex xs6>
                                    <v-card xs6>
                                        <v-card-text>
                                            <v-text-field
                                                    box
                                                    v-model="slogan"
                                                    :counter="10"
                                                    label="شعار استخدامی"
                                                    required
                                            ></v-text-field>
                                            <v-text-field
                                                    box
                                                    v-model="website"
                                                    :counter="10"
                                                    label="آدرس وبسایت"
                                                    required
                                            ></v-text-field>

                                            <v-text-field
                                                    box
                                                    v-model="phone_number"
                                                    :counter="10"
                                                    label="شماره تماس"
                                                    required
                                            ></v-text-field>
                                        </v-card-text>
                                    </v-card>
                                </v-flex>

                            </v-layout>

                            <v-combobox
                                    box
                                    v-model="location"
                                    :items="cities"
                                    label="محل کار (شهر یا استان)"
                            ></v-combobox>
                            <v-card>
                                <v-card-text>
                                    <v-layout row>
                                        <v-flex xs6>
                                            <v-card>
                                                <v-card-title>لوگو</v-card-title>
                                                <v-img
                                                        :src="companyInfo.logo"
                                                        aspect-ratio="2.75"
                                                >
                                                </v-img>
                                                <v-card-text>
                                                    <input
                                                            type="file" accept="image/*"
                                                    @change="changeLogo"
                                                    />
                                                </v-card-text>
                                            </v-card>
                                        </v-flex>

                                        <v-flex xs6>
                                            <v-card>
                                                <v-card-title>عکس اصلی صفحه</v-card-title>
                                                <v-img
                                                        aspect-ratio="2.75"
                                                        :src="companyInfo.main_photo"
                                                >
                                                </v-img>
                                                <v-card-text>
                                                    <input
                                                            type="file" accept="image/*"
                                                            @change="changeMainPhoto"

                                                    />

                                                </v-card-text>
                                            </v-card>
                                        </v-flex>

                                    </v-layout>
                                </v-card-text>
                            </v-card>
                            <v-divider></v-divider>

                            <v-card>
                                <v-card-title>
                                    پیام استخدامی شما:
                                </v-card-title>
                                <v-card-text>
                                    <v-text-field
                                            box
                                            v-model="message_title"
                                            :counter="10"
                                            label="عنوان پیام"
                                            required
                                    ></v-text-field>

                                    <v-textarea
                                            box
                                            v-model="message_content"
                                            :counter="10"
                                            label="متن پیام"
                                            required
                                    ></v-textarea>
                                </v-card-text>
                            </v-card>
                            <v-divider></v-divider>
                            <v-card>
                                <v-card-title>
                                    درباره ما:
                                </v-card-title>
                                <v-card-text>
                                    <v-textarea
                                            box
                                            v-model="about_us"
                                            :counter="10"
                                            required
                                    ></v-textarea>
                                </v-card-text>
                            </v-card>

                            <v-divider></v-divider>
                            <v-card>
                                <v-card-title>
                                    چرا اینجا؟
                                </v-card-title>
                                <v-card-text>

                                    <v-textarea
                                            box
                                            v-model="why_us"
                                            :counter="10"
                                            required
                                    ></v-textarea>
                                </v-card-text>
                            </v-card>

                            <v-divider></v-divider>
                            <v-card>
                                <v-card-title>
                                    مراحل استخدام
                                </v-card-title>
                                <v-card-text>
                                    <v-textarea
                                            box
                                            v-model="recruiting_steps"
                                            :counter="10"
                                            required
                                    ></v-textarea>
                                </v-card-text>
                            </v-card>
                        </v-form>
                    </v-card-text>
                    <v-btn color="green" type="submit" dark @click.native="editCompany">
                        ویرایش
                    </v-btn>
                </v-card>
            </v-card-text>

        </v-card>
    </v-container>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "editCompany",
        components: {},
        computed: {
            ...mapGetters(['userInfo', 'companyInfo']),
        },
        data() {
            return {
                id:null,
                name: null,
                company_size: null,
                slogan: null,
                website: null,
                logo: null,
                message_title: null,
                message_content: null,
                main_photo: null,
                about_us: null,
                why_us: null,
                recruiting_steps: null,
                address: null,
                email: null,
                phone_number: null,
                location: null,
                cities: ['تهران', 'کرج', 'اصفهان', 'مشهد', 'کیش', 'شیراز',],
                Logo:null,
                mainPhoto:null,
            }
        },

        created() {
            let id = this.$store.getters.userInfo.company_id;
            this.$store.dispatch('retrieveCompany', id);

            this.id = this.companyInfo.id;
            this.name = this.companyInfo.name;
            this.company_size = this.companyInfo.company_size;
            this.slogan = this.companyInfo.slogan;
            this.website = this.companyInfo.website;
            this.logo = this.companyInfo.logo;
            this.message_title = this.companyInfo.message_title;
            this.message_content = this.companyInfo.message_content;
            this.main_photo = this.companyInfo.main_photo;
            this.about_us = this.companyInfo.about_us;
            this.why_us = this.companyInfo.why_us;
            this.recruiting_steps = this.companyInfo.recruiting_steps;
            this.address = this.companyInfo.address;
            this.email = this.companyInfo.email;
            this.phone_number = this.companyInfo.phone_number;
            this.location = this.companyInfo.location;
        },
        methods: {
            changeLogo(){
                this.Logo= event.target.files[0];

            },
            changeMainPhoto(){
                this.mainPhoto= event.target.files[0]
            },
            editCompany() {
                console.log(this.Logo);
                console.log(this.mainPhoto);
                this.$store.dispatch('editCompany', {
                    id:this.id,
                    name: this.name,
                    company_size: this.company_size,
                    slogan: this.slogan,
                    website: this.website,
                    logo: this.Logo,
                    message_title: this.message_title,
                    message_content: this.message_content,
                    main_photo: this.mainPhoto,
                    about_us: this.about_us,
                    why_us: this.why_us,
                    recruiting_steps: this.recruiting_steps,
                    address: this.address,
                    email: this.email,
                    phone_number: this.phone_number,
                    location: this.location,

                })
            }
        }

    }
</script>

<style scoped>

</style>
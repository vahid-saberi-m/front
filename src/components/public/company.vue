<template>

    <div id="app">
        <v-app dark class="text-right">
            <template>
                <v-toolbar>

                    <v-img contain  style="position: relative; height: 100%;
                    left: 130px;" :src="companyInfo.logo"></v-img>
                    <v-toolbar-title style="position: relative;
                    left: 230px;">
                        <a :src="companyInfo.website">
                            <h1>{{companyInfo.name}}</h1>
                        </a>
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items class="hidden-sm-and-down">
                        <v-btn flat>فرصتهای شغلی</v-btn>
                        <v-btn flat>درباره ما</v-btn>
                        <v-btn flat>رویدادها</v-btn>
                    </v-toolbar-items>

                </v-toolbar>
            </template>

            <v-divider></v-divider>
            <v-content>
                <section>
                    <v-parallax :src="companyInfo.main_photo" height="600">
                        <v-layout
                                column
                                align-center
                                justify-center
                                class="white--text"
                        >
                            <v-card light style="border-radius: 15px; opacity: 0.92" width="40%">

                                <v-img :src="companyInfo.logo"
                                       aspect-ratio="2.75"></v-img>
                                <v-card-text style="opacity: 80%; " class="text-xs-center">

                                    <h1 class=" mb-2 display-1 ">{{companyInfo.name}}</h1>
                                    <div class="subheading mb-3 ">{{companyInfo.slogan}}</div>
                                    <b>
                                        {{companyInfo.message_title}}
                                    </b><br>
                                    {{companyInfo.message_content}}
                                </v-card-text>
                            </v-card>
                        </v-layout>
                    </v-parallax>

                </section>
                <v-divider></v-divider>
                <section>
                    <v-card>
                        <v-card-text>
                            <about-company :company="companyInfo"></about-company>
                        </v-card-text>
                    </v-card>
                </section>
                <v-divider></v-divider>
                <section>
                    <v-card>
                        <v-card-title>
                        </v-card-title>
                        <v-card-text>
                            <jobPosts :job-posts="companyInfo.jobPosts" :companyId="id"></jobPosts>
                        </v-card-text>
                    </v-card>
                    <apply-modal></apply-modal>
                </section>
                <v-divider></v-divider>
                <section>
                    <v-card>
                        <v-card-text>

                            <public-events :events="companyInfo.events"></public-events>
                        </v-card-text>
                    </v-card>
                </section>
                <v-divider></v-divider>
                <section>
                    <company-footer></company-footer>
                </section>

            </v-content>
        </v-app>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import jobPosts from './jobPosts/jobPosts'
    import ApplyModal from "./jobPosts/jobPostCard/applyModal";
    import PublicEvents from "./events/publicEvents";
    import AboutCompany from "./about/aboutCompany";
    import CompanyFooter from "./companyFooter";

    export default {
        props: ['id'],
        components: {CompanyFooter, AboutCompany, PublicEvents, ApplyModal, jobPosts},
        computed: {
            ...mapGetters(['companyInfo'])
        },
        data() {
            return {}
        },
        name: "company",
        created() {
            this.$store.dispatch('retrieveCompany', this.id);

        },


    }

</script>

<style scoped>

</style>
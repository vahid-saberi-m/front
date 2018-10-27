<template>

    <div id="app">
        <v-app dark class="text-right">
            <template>
                <v-toolbar >

                    <v-img contain max-height="70" style="position: relative;
                    left: 130px;" :src="companyInfo.logo" ></v-img>
                    <v-toolbar-title style="position: relative;
                    left: 230px;">
                        <a :src="companyInfo.website">
                        <h1>{{companyInfo.name}}</h1>
                        </a>
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items class="hidden-sm-and-down" >
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
                            <img :src="companyInfo.logo" alt="Vuetify.js" height="200">
                            <h1 class="white--text mb-2 display-1 text-xs-center">{{companyInfo.name}}</h1>
                            <div class="subheading mb-3 text-xs-center">{{companyInfo.slogan}}</div>
                            <v-btn
                                    class="blue lighten-2 mt-5"
                                    dark
                                    large
                                    href=""
                            >
                                به ما بپیوندید
                            </v-btn>
                        </v-layout>
                    </v-parallax>

                </section>
                <v-divider></v-divider>
                <section>
                    <about-company :company="companyInfo"></about-company>
                </section>
                <v-divider></v-divider>
                <section>
                    <v-card>
                        <v-card-title>
                        </v-card-title>
                        <v-card-text>
                            <jobPosts :job-posts="companyInfo.jobPosts" :companyId="id"></jobPosts>
                            <apply-modal></apply-modal>
                        </v-card-text>
                    </v-card>
                </section>
                <v-divider></v-divider>
                <section>
                    <public-events :events="companyInfo.events"></public-events>
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
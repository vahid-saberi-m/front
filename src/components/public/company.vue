<template>

    <div id="app" :key="this.$route.params.id">
        <div class="text-right">
            <template>
                <nav>

                    <img :src="companyInfo.logo">

                    <div class="page-links">
                        <a>فرصتهای شغلی</a>
                        <a>درباره ما</a>
                        <a>رویدادها</a>
                    </div>

                </nav>
            </template>

            <div class="company-intro" v-bind:style='[{ backgroundImage :backgroundImage }]'>

                <!--        <img class="background" :src="companyInfo.main_photo"/>-->
                <div class="white--text">
                    <div class="card intro-card">

                        <img alt="company" :src="companyInfo.logo">
                        <div class=" text-xs-center">

                            <h1 class=" mb-2 display-1 ">{{companyInfo.name}}</h1>
                            <div class="subheading mb-3 ">{{companyInfo.slogan}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="background-color: Background">

                <div class=" card company-massage">
                    <div class="card-header"><b>{{companyInfo.message_title}}</b>
                    </div>
                    <br>
                    <div class="card-body">
                        {{companyInfo.message_content}}
                    </div>
                </div>
            </div>
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

        </div>
    </div>

</template>

<script>
    import {mapGetters} from 'vuex'
    import {mapActions} from 'vuex'
    import jobPosts from './jobPosts/jobPosts'
    import ApplyModal from "./jobPosts/jobPostCard/applyModal";
    import PublicEvents from "./events/publicEvents";
    import AboutCompany from "./about/aboutCompany";

    export default {
        props: ['id'],
        components: {CompanyFooter, AboutCompany, PublicEvents, ApplyModal, jobPosts},

        computed: {
            ...mapGetters(['companyInfo']),

            ...mapActions(['retrieveCompany']),

        },
        watch: {
            '$route'(to, from) {
                alert(this.$route.params.id)
            }
        },
        data() {

            return {}
        },
        name: "company",

        methods: {
            ...mapActions(['retrieveCompany'])
        },
        // this.$store.dispatch('retrieveCompany', this.id);

        beforeMount() {
            // this.backgroundImage= `url(${this.companyInfo.main_photo})`;
            this.backgroundImage = `url(http://files.balatar.inpin.co/companies/main_photos/aGC5IZuGKFgTN516xxzfXgjH0BY0DPiVsmf6X0AC.jpeg)`;

        },
        created() {
            this.$store.dispatch('retrieveCompany', this.$route.params.id);
            // alert(this.backgroundImage1)
            // this.backgroundImage1= "url(" + this.companyInfo.main_photo + ")"
        },

    }


    import CompanyFooter from "./companyFooter";

</script>


<style lang="scss" scoped>
    @import "../../styles/public/company";
</style>

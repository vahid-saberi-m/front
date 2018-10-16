<template>

    <div id="app">
        <v-app dark class="text-right">
            <v-toolbar class="">
                <v-toolbar >
                    <!--{{companyInfo.name}}-->
                </v-toolbar>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                </v-toolbar-items>
                <v-img contain max-height="70" :src="companyInfo.logo"></v-img>
            </v-toolbar>
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
                <section>
                    <v-card>
                        <v-card-title>
                        </v-card-title>
                        <v-card-text>
                            <jobPosts :companyId="id"></jobPosts>
                            <apply-modal></apply-modal>
                        </v-card-text>
                    </v-card>
                </section>

            </v-content>
        </v-app>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import jobPosts from './jobPosts/jobPosts'
    import ApplyModal from "./jobPosts/jobPostCard/applyModal";

    export default {
        props: ['id'],
        components:{ApplyModal, jobPosts},
        computed: {
            ...mapGetters(['companyInfo'])
        },
        data(){
          return{
          }
        },
        name: "company",
        created() {
            this.$store.dispatch('retrieveCompany', this.id);

        },


    }

</script>

<style scoped>

</style>
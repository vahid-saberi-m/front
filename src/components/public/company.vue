<template>

  <div id="app">
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

      <section class="company-intro" v-bind:style='{ backgroundImage: "url(" + companyInfo.main_photo + ")", }'>

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
      </section>
      <v-card class=" company-massage">
        <v-card-title > <b>{{companyInfo.message_title}}</b></v-card-title>
        <br>
        <v-card-text >
          {{companyInfo.message_content}}
        </v-card-text>
      </v-card>
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
        },
        data() {

            return {}
        },
        name: "company",

        methods: {
            ...mapActions(['retrieveCompany'])
        },
        // this.$store.dispatch('retrieveCompany', this.id);
        created() {
            this.retrieveCompany(this.id)
        }


    }

    import CompanyFooter from "./companyFooter";

</script>


<style lang="scss" scoped>
  @import "../../styles/public/company";
</style>

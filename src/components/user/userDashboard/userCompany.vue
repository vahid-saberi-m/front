<template>
    <v-content>
        <div v-if="companyInfo">
            <section >
                <v-parallax :src="companyInfo.main_photo" >
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

        </div>
    </v-content>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "userCompany",
        computed: {
            ...mapGetters(['userInfo', 'companyInfo'])
        },
        created() {
            this.$store.dispatch('retrieveCompany', this.userInfo.company_id);
        }
    }
</script>

<style scoped>

</style>

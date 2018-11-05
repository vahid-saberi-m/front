<template>
    <v-content>
        <div v-if="companyInfo">
            <section v-if="companyInfo.is_live">
                <v-parallax :src="companyInfo.main_photo" height="600" >
                    <v-layout
                            column
                            align-center
                            justify-center
                            class="white--text"
                    >
                        <img :src="companyInfo.logo" alt="Vuetify.js" height="200">
                        <h1 class="white--text mb-2 display-1 text-xs-center">{{companyInfo.name}}</h1>
                        <div class="subheading mb-3 text-xs-center">{{companyInfo.slogan}}</div>

                    </v-layout>
                </v-parallax>

            </section>
                <v-card v-if="!companyInfo.is_live">
                    <v-card-title style="direction: rtl; color: red;padding-top: 10%">سایت استخدامی شما ساخته شده و در انتظار تایید مدیر سایت می باشد.</v-card-title>
                </v-card>
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
            console.log(this.companyInfo)
        }
    }
</script>

<style scoped>

</style>
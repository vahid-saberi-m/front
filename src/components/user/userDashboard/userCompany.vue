<template>
        <div v-if="companyInfo">

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
        </div>
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

<style lang="scss" scoped>
    @import "../../../styles/user/userDashboard/userCompany.scss";
</style>

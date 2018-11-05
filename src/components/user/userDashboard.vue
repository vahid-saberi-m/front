<template>
<v-container>
    <userHeader></userHeader>
    <transition>
    <router-view v-if="companyInfo.is_live"></router-view>
    <v-card v-if="!companyInfo.is_live" style="direction: rtl; color: red">
        <v-card-title >سایت استخدامی شما ساخته شده و در انتظار تایید مدیر سایت می باشد.</v-card-title>
    </v-card>
    </transition>
</v-container>

</template>

<script>
    import balatarHeader from '../BalatarHeader'
    import userHeader from './userHeader'
    import UserCompany from "./userDashboard/userCompany";
    import {mapGetters} from 'vuex'
    export default {
        name: "userDashboard",
        components: {UserCompany, balatarHeader, userHeader},
        computed:{
            ...mapGetters(['companyInfo'])
        },
        data() {
            return {
                sideNav: false,
                companyId: this.$store.state.companyId,
                name: this.$store.state.name,
                position: this.$store.state.position,
                email: this.$store.state.email,
                image: null,
                company_id: '',
                companyName: '',
                newCompany: '',
                set: '',
                step: 1,
            }
        }
    }
</script>

<style scoped>

</style>
<template>
<div >
    <userHeader></userHeader>
    <user-company></user-company>
    <router-view></router-view>
</div>

</template>

<script>
    import balatarHeader from '../BalatarHeader'
    import userHeader from './userHeader'
    import UserCompany from "./userDashboard/userCompany";
    export default {
        name: "userDashboard",
        components: {UserCompany, balatarHeader, userHeader},
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
<template>
<div >
    <userHeader></userHeader>
</div>

</template>

<script>
    import balatarHeader from '../BalatarHeader'
    import userHeader from './userHeader'
    export default {
        name: "userDashboard",
        components: { balatarHeader, userHeader},
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
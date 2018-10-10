<template>
    <div class="text-right">
        <div v-for="company in companies " class=" jumbotron  row " style="background-color: beige ">
            <div class="col-3">
                <a :href="company.website">
                    <img :src="company.logo" alt="logo"/>
                </a>
            </div>
            <div class="col-6">

            </div>
            <div class="col-3 " style="float: right">
                <h1>{{company.name}}</h1>
            <h4>{{company.slogan}}</h4>
            <router-link :to=id> </router-link>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        props: ['id'],

        name: "company",
        data() {
            return {
                companies: [],
            }
        },
        created(){
            fetch('http://api.balatar.inpin.co/api/company/' + this.id, {
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }} )
                .then(response => response.json())
                .then((data) => {
                    this.companies = data;
                })
        },
        // mounted() {
        //     fetch('http://api.balatar.inpin.co/api/company/1')
        //         .then(response => response.json())
        //         .then((data) => {
        //             this.companies = data;
        //
        //         })
        // },


    }

</script>

<style scoped>

</style>
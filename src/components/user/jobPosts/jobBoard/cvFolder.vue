<template>
    <v-flex >
        <v-card style="direction: rtl" >

            <v-card-title>
                {{name}}
            </v-card-title>
            <v-card-text  >
                <v-content v-for="application in jobPostApplications" :key="application.id">

                <v-card v-if="application.cv_folder_id===id" >
                <application :info="application" :key="application.id" v-on:application1="cvView"></application>
                </v-card>
                </v-content>
            </v-card-text>
        </v-card>
    </v-flex>
</template>

<script>
    import {mapGetters} from 'vuex'
    import application from "./application";
    export default {
        name: "cvFolder",
        components: { application},
        props: ['id', 'name','jobPostApplications'],
        computed: {
            ...mapGetters(['cvFolderApplications'])
        },
        created(){
        },
        methods:{
            cvView(){
                console.log('3')
            }
        }
    }
</script>

<style scoped>

</style>
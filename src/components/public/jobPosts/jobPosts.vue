<template>
    <v-content>
        <!--<v-card  v-for="jobPost in publicJobPosts">-->
        <!--</v-card>-->
        <v-card light>
            <v-card-title>
                موقعیت های شغلی:
            </v-card-title>
            <v-card-text>
                <v-card v-for="jobPost in publicJobPosts" :key="jobPost.id">
                    <jobPostShow :jobPostInfo="jobPost" :key="jobPost.id"></jobPostShow>
                </v-card>
            </v-card-text>
        </v-card>
    </v-content>
</template>

<script>
    import jobPostShow from './jobPostCard/jobPostShow'
    import {mapGetters} from 'vuex'
    export default {
        name: "jobPosts",
        props:['companyId'],
        components:{jobPostShow, mapGetters},
        computed:{
            ...mapGetters(['publicJobPosts'])
        },
        data(){
            return{
                id:this.companyId,
            }
        },
        mounted(){
        },
    }
</script>

<style scoped>

</style>
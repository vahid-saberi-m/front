<template>

    <v-card hover  >
        <v-card-title   @click="viewCv(info.id)" >
            <b>{{info.name}}</b>
            <v-spacer></v-spacer>
            <v-icon small @click="deleteApplication(info.id)" >delete</v-icon>
        </v-card-title>
        <v-card-text class="text-right">
           <small>{{info.company}}</small><br>
           <small>{{info.position}}</small>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "application",
        props:['info'],
        data(){
            return{
                value:true
            }
        },
        methods:{
            deleteApplication(id){
                this.$store.dispatch('deleteApplication',id)
            },
            viewCv(id){
                this.$store.dispatch('applicationViewCv',id);
                this.$store.commit('APPLICATION_DIALOG');
            },

        },

    }
</script>

<style scoped>

</style>
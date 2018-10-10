<template>
    <v-card draggable="true"  >
        <v-card-title @click="openDialog"  >
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
        methods:{
            deleteApplication(id){
                this.$store.dispatch('deleteApplication',id)
            },
            openDialog(){
                this.$store.commit('APPLICATION_DIALOG');
                console.log(1)
            },


        },
    }
</script>

<style scoped>

</style>
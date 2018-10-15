<template>
    <v-card  >
        <v-card-title   @click="viewCv(info.id)" >
            <b>{{info.name}}</b>
            <v-spacer></v-spacer>
        </v-card-title>
        <v-card-text class="text-right">
            <small>{{info.company}}</small><br>
            <small>{{info.position}}</small>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "cvViewApplication",
        props:['info'],
        methods:{

            viewCv(id){
                this.$store.dispatch('applicationViewCv',id);
            },

        },

    }
</script>

<style scoped>

</style>
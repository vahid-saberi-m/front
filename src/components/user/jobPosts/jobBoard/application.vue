<template>
    <v-card draggable="true">
        <v-card-title>
            <b>{{info.name}}</b>
            <v-spacer></v-spacer>
            <v-icon small >delete</v-icon>
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
        props:['info']
    }
</script>

<style scoped>

</style>
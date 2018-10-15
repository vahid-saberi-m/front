<template>
    <v-card>
        <v-card-title>
            انتقال به یکی از پوشه ها:
        </v-card-title>
        <v-layout row>
        <v-card-text v-for="cvFolder in cvFolders">
            <v-btn v-if="cvFolder.id!==id" :key="cvFolder.id">
                {{cvFolder.name}}
            </v-btn>
        </v-card-text>
        </v-layout>
    </v-card>
    
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "cvFoldrStash",
        props:['id'],
        computed:{
            ...mapGetters(['cvFolders'])
        },
    }
</script>

<style scoped>

</style>
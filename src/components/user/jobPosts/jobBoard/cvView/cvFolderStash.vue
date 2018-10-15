<template>
    <v-card>
        <v-card-title>
            انتقال به یکی از پوشه ها:
        </v-card-title>
        <v-layout row>
        <v-card-text v-for="cvFolder in cvFolders" :key="cvFolder.id">
            <v-btn v-if="cvFolder.id!==id" @click="changeApplicationCvFolder(cvFolder.id)">
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
        methods:{
            changeApplicationCvFolder(cvFolderId){
                this.$store.commit('TARGET_CV_FOLDER',cvFolderId);
                this.$store.dispatch('changeApplicationCvFolder')
            },
        }
    }
</script>

<style scoped>

</style>
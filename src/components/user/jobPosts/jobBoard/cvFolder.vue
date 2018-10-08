<template>
    <v-flex >
        <v-card style="direction: rtl">

            <v-card-title>
                {{name}}
            </v-card-title>
        </v-card>
    </v-flex>
</template>

<script>
    export default {
        name: "cvFolder",
        props: ['id', 'name'],
        created(){
            this.$store.dispatch('indexCvFolderApplications',this.id)
        }
    }
</script>

<style scoped>

</style>
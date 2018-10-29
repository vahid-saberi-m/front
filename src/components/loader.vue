<template>
    <v-dialog
            v-model="loader"
            hide-overlay
            persistent
            width="300"
    >
        <v-card
                color="primary"
                dark
        >
            <v-card-text>
                Please stand by
                <v-progress-linear
                        indeterminate
                        color="white"
                        class="mb-0"
                ></v-progress-linear>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
    import {mapGetters} from 'vuex'
    import axios from 'axios'

    export default {
        name: "loader",
        computed:{
            ...mapGetters(['loader'])
        },
        created(){
            axios.interceptors.request.use(function (config) {
                this.$store.commit('LOADER',true);
                return config;
            }, function (error) {
                this.$store.commit('LOADER',false);
                return Promise.reject(error);
            });
            console.log('loader');
            axios.interceptors.response.use(function (response) {
                this.$store.commit('LOADER',false);
                return response;
            }, function (error) {
                this.$store.commit('LOADER',false);
                return Promise.reject(error);
            });
        }

    }
</script>

<style scoped>

</style>
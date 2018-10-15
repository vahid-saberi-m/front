<template>
    <v-card>
        <v-card-text>
            <v-layout row>
                <v-flex xs6>
                    <b>{{applicationViewCv.name}}</b>
                </v-flex>

                <v-flex xs6>
                    <b>{{applicationViewCv.company}}</b>
                </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-layout row>
                <v-flex xs6>
                    <p>{{applicationViewCv.degree}},{{applicationViewCv.education}}</p>
                </v-flex>

                <v-flex xs6>
                    <small>سمت:</small>
                    <p>{{applicationViewCv.position}}</p>
                </v-flex>
            </v-layout>
        </v-card-text>
    </v-card>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "ApplicantInfoCard",

        computed: {

            ...mapGetters(['applicationViewCv']),

        }
    }
</script>

<style scoped>

</style>
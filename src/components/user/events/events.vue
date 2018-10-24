<template>
    <v-container>
        <v-layout row style="direction: rtl">
            <v-flex xs4>
                <create-event></create-event>
            </v-flex>
            <v-flex xs4 v-for="event in retrieveEvents">
                <event-card :event="event"></event-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import {mapGetters} from 'vuex'
    import eventCard from './events/eventCard'
    import CreateEvent from "./events/createEvent";

    export default {
        name: "events",
        components: {CreateEvent, eventCard},
        computed: {
            ...mapGetters(['retrieveEvents'])
        },
        created() {
            this.$store.dispatch('retrieveEvents', this.$store.getters.userInfo.company_id);
            console.log(this.$store.getters.userInfo.company_id)
        }
    }
</script>

<style scoped>

</style>
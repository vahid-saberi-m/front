<template>
    <div>
        <v-carousel hide-delimiters>
                <v-carousel-item v-for="(event,i) in events" :key="i" >
                    <public-event-card :event="event"></public-event-card>
                </v-carousel-item>
        </v-carousel>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import PublicEventCard from "./publicEvents/publicEventCard";

    export default {
        name: "public-events",
        props:['events'],
        components: {PublicEventCard},


    }
</script>

<style scoped>

</style>
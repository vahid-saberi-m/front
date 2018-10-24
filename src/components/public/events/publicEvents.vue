<template>
    <div>
        <v-carousel>
                <v-carousel-item v-for="(event,i) in retrieveEvents" :key="i" :src="event.main_photo" >
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
        components: {PublicEventCard},
        computed: {
            ...mapGetters(['retrieveEvents'])
        },

    }
</script>

<style scoped>

</style>
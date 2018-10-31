<template>
    <v-layout>
        <v-flex>
                <v-container>
            <v-card>

                    <v-img
                            :src="event.main_photo"
                            aspect-ratio="2.75"
                    ></v-img>
                <v-card>
                    <v-card-title>
                        <h3 class="headline mb-0">{{event.title}}</h3>
                    </v-card-title>
                    <v-card-text>
                        {{event.content}}
                    </v-card-text>
                </v-card>

            </v-card>
                </v-container>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "publicEventCard",
        props: ['event']
    }
</script>

<style scoped>

</style>
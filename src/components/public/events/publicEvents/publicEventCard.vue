<template>
    <v-layout>
        <v-flex>
            <v-card style="height: 100%" class="scroll-y">
                <!--<v-img-->
                        <!--:src="event.main_photo"-->
                        <!--aspect-ratio="2.75"-->
                <!--&gt;</v-img>-->

                <v-card-text primary-title >
                    <div>
                        <h3 class="headline mb-0">{{event.title}}</h3>
                        <div>{{event.content}}</div>
                    </div>
                </v-card-text>

            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "publicEventCard",
        props:['event']
    }
</script>

<style scoped>

</style>
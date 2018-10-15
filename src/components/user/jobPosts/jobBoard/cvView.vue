<template>
    <div class="text-xs-center">
        <v-dialog
                v-model="applicationDialog"
                width="500"
                lazy
        >


            <v-card>
                <v-card-title
                        class="headline grey lighten-2"
                        primary-title
                >
                    {{applicationViewCv.name}}
                </v-card-title>

                <v-card-text>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="primary"
                            flat
                            @click="dialog = false"
                    >
                        I accept
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "cvView",
        computed:{
            ...mapGetters(['applicationDialog','applicationViewCv'])
        },

    }
</script>

<style scoped>

</style>
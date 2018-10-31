<template>
    <div class="text-xs-center">
        <v-dialog
                v-model="modal"
                width="500"
        >

            <v-card>
            <router-view></router-view>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="primary"
                            flat
                            @click="modal = false"
                    >
                        انصراف
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
        import {mapGetters} from 'vuex'
    export default {
        name: "applyModal",
        components: { },
        computed:{
            ...mapGetters(['applyModal','applyStep','applyJobPost','appliedBefore']),
            modal:{
                get(){
                    return this.applyModal
                },
                set(){
                    this.$store.commit('APPLY_MODAL')
                }
            }
        },
        data(){
            return{
                email:null
            }
        },
        created(){
            // this.applyModal?this.$store.commit('APPLY_MODAL'):null
        }
    }
</script>

<style scoped>

</style>
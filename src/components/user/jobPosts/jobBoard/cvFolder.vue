<template>
    <v-flex>
        <v-card style="direction: rtl">

            <v-card-title>
                {{name}}
            </v-card-title>
            <v-card-text  @drop="changeApplicationCvFolder(id)">
                <v-content v-for="application in jobPostApplications" :key="application.id">
                    <draggable v-model="cvFolderApplications" :options="{group:'applications',animation:200}" @start="drag=true" style=" min-height: 10px;"
                               @end="drag=false">
                        <v-card v-if="application.cv_folder_id===id" @drag="movingApplication=application.id ">
                            <application :info="application" :key="application.id"
                                         v-on:application1="cvView" ></application>
                        </v-card>
                    </draggable>
                </v-content>
            </v-card-text>
        </v-card>
    </v-flex>
</template>

<script>
    import {mapGetters} from 'vuex'
    import application from "./application";
    import draggable from 'vuedraggable'

    export default {
        name: "cvFolder",
        components: {application, draggable},
        props: ['id', 'name', 'jobPostApplications'],
        computed: {
            ...mapGetters(['cvFolderApplications']),
            cvFolderApplications: {
                get() {
                    this.$store.getters.cvFolderApplications
                },
                set(value) {
                    this.$store.commit('CV_FOLDER_APPLICATIONS', value)
                }
            }
        },
        data(){
            return{
                movingApplication:null,
            }
        },
        created() {
        },
        methods: {
            cvView() {
                console.log('3')
            },
            changeApplicationCvFolder(id){
                this.$store.dispatch('changeApplicationCvFolder',{cvFolder: id ,application:this.movingApplication})
           },

        }
    }
</script>

<style scoped>

</style>
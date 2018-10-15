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
                        <v-card v-if="application.cv_folder_id===id" @drag="setMovingApplication(application.id)" >
                            <application :info="application" :key="application.id"
                                        ></application>
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
    import {TARGET_CV_FOLDER} from "../../../../store/cvFolder/mutationTypes";
    import {MOVING_APPLICATION} from "../../../../store/application/mutationTypes";

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
            setMovingApplication(applicationId){
                this.$store.commit(MOVING_APPLICATION,applicationId)
            },
            changeApplicationCvFolder(cvFolderId){
                this.$store.commit(TARGET_CV_FOLDER,cvFolderId);
                this.$store.dispatch('changeApplicationCvFolder')
           },


        }
    }
</script>

<style scoped>

</style>
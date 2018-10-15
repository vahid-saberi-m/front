<template>
    <v-flex>
        <v-card style="direction: rtl">

            <v-card-title>
                {{name}}
            </v-card-title>
            <v-card-text>
                <v-content v-for="application in jobPostApplications" :key="application.id">
                        <v-card v-if="application.cv_folder_id===id" >
                            <cv-view-application :info="application" :key="application.id"
                            ></cv-view-application>
                        </v-card>
                </v-content>
            </v-card-text>
        </v-card>
    </v-flex>
</template>

<script>
    import {mapGetters} from 'vuex'
    import draggable from 'vuedraggable'
    import CvViewApplication from "./cvViewCvFolder/cvViewApplication";

    export default {
        name: "cvViewCvFolder",
        components: {CvViewApplication, draggable},
        props: ['id', 'name', ],
        computed: {
            ...mapGetters(['cvFolderApplications','jobPostApplications']),
            cvFolderApplications: {
                get() {
                  return   this.cvFolderApplications
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
            },
            setMovingApplication(applicationId){
                this.$store.commit('MOVING_APPLICATION',applicationId)
            },
            changeApplicationCvFolder(cvFolderId){
                this.$store.commit('TARGET_CV_FOLDER',cvFolderId);
                this.$store.dispatch('changeApplicationCvFolder')
            },


        }
    }
</script>

<style scoped>

</style>
<template>
    <v-card style="direction: rtl">

        <div class="cv-folder-body">


                <div  v-for="application in jobPostApplications" :key="application.id"
                      style="min-width: 100px;">

                    <application :info="application"
                    ></application>

                </div>
        </div>

        <!--<v-card-title>-->
            <!--{{name}}-->
        <!--</v-card-title>-->
        <!--<v-card-text>-->
            <!--<v-content v-for="application in jobPostApplications" :key="application.id">-->
                <!--<v-card v-if="application.cv_folder_id===id">-->
                    <!--<cv-view-application :info="application" :key="application.id"-->
                    <!--&gt;</cv-view-application>-->
                <!--</v-card>-->
            <!--</v-content>-->
        <!--</v-card-text>-->
    </v-card>
</template>

<script>
    import {mapGetters} from 'vuex'
    import draggable from 'vuedraggable'
    import CvViewApplication from "./cvViewCvFolder/cvViewApplication";
    import application from "../jobBoard/cvFolders/application"

    export default {
        name: "cvViewCvFolder",
        components: {CvViewApplication,application, draggable},
        props: ['id', 'name',],
        computed: {
            ...mapGetters(['cvFolderApplications', 'jobPostApplications']),
            cvFolderApplications: {
                get() {
                    return this.cvFolderApplications
                },
                set(value) {
                    this.$store.commit('CV_FOLDER_APPLICATIONS', value)
                }
            }
        },
        data() {
            return {
                movingApplication: null,
            }
        },
        created() {
        },
        methods: {
            cvView() {
            },
            setMovingApplication(applicationId) {
                this.$store.commit('MOVING_APPLICATION', applicationId)
            },
            changeApplicationCvFolder(cvFolderId) {
                this.$store.commit('TARGET_CV_FOLDER', cvFolderId);
                this.$store.dispatch('changeApplicationCvFolder')
            },


        }
    }
</script>

<style scoped>

</style>
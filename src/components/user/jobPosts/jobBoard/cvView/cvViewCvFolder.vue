<template>
        <div class="cv-folder-body">
                <div  class="application"  v-for="application in jobPostApplications" :key="application.id">

                        <div  class="card-header" @click="viewCv(application.id)" >
                            <b>{{application.name}}</b>

                            <v-icon class="delete-icon" small @click="deleteApplication(application.id)" >delete</v-icon>
                        </div>
                        <div class="card-body">
                            <div class="">{{application.position}}</div>
                            <div class="">{{application.company}}</div>
                        </div>

                </div>
        </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import draggable from 'vuedraggable'
    import CvViewApplication from "./cvViewCvFolder/cvViewApplication";
    export default {
        name: "cvViewCvFolder",
        components: {CvViewApplication, draggable},
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

            deleteApplication(id){
                this.$store.dispatch('deleteApplication',id)
            },
            viewCv(id){
                this.$store.dispatch('applicationViewCv',id);
            },

        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../../../styles/user/jobBoard/cvView/cvViewCvFolder";
</style>
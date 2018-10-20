<template>
    <v-flex xs3>

        <v-card style="direction: rtl; height:100% ;" dark tile>

            <v-card-title v-bind:style="{backgroundColor: color}">
                <h5><b>{{name}}</b></h5>
            </v-card-title>
            <v-card-text droppable @drop="changeApplicationCvFolder(id)">
                <v-card v-for="application in jobPostApplications" :key="application.id" style="min-width: 100px">
                    <draggable v-model="cvFolderApplications" :options="{group:'applications',animation:200}"
                               @start="drag=true " style=" min-height: 10px;"
                               @end="drag=false"
                    >
                        <v-card v-if="application.cv_folder_id===id" draggable @drag="setMovingApplication(application.id)">
                            <application :info="application"
                            ></application>
                        </v-card>
                    </draggable>
                </v-card>
            </v-card-text>
        </v-card>
        <v-spacer></v-spacer>
    </v-flex>
</template>

<script>
    import {mapGetters} from 'vuex'
    import application from "../application";
    import draggable from 'vuedraggable'
    import {TARGET_CV_FOLDER} from "../../../../../store/cvFolder/mutationTypes";
    import {MOVING_APPLICATION} from "../../../../../store/application/mutationTypes";

    export default {
        name: "cvFolder",
        components: {application, draggable},
        props: ['id', 'name',],
        computed: {
            ...mapGetters(['cvFolderApplications', 'jobPostApplications']),
            cvFolderApplications: {
                get() {
                   return  this.$store.getters.cvFolderApplications
                },
                set(value) {
                    this.$store.commit('CV_FOLDER_APPLICATIONS', value)
                }
            }
        },
        data() {
            return {
                movingApplication: null,
                color: null,
            }
        },
        created() {

            if (this.name === 'صف انتظار') {
                this.color = '#0066cc'
            }
            if (this.name === 'قابل تامل') {
                this.color = 'yellowgreen'
            }
            if (this.name === 'رد شده') {
                this.color = '#cc0000'
            }
            if (this.name === 'دعوت به مصاحبه') {
                this.color = '#00cc00'
            }
        },

        methods: {
            cvView() {
                console.log('3')
            },
            setMovingApplication(applicationId) {
                this.$store.commit(MOVING_APPLICATION, applicationId);
                console.log('id'+applicationId)
            },
            changeApplicationCvFolder(cvFolderId) {
                this.$store.commit(TARGET_CV_FOLDER, cvFolderId);
                this.$store.dispatch('changeApplicationCvFolder')
            },


        }


    }
</script>

<style scoped>

</style>
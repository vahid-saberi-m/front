<template>
    <v-flex xs3>
        <v-card style="direction: rtl; height:100% ;" dark tile>

            <v-card-title v-bind:style="{backgroundColor: color}">
                <h5><b>{{cvFolder.name}}</b></h5>
            </v-card-title>
            <v-card-text @drop="changeApplicationCvFolder(cvFolder.id)"
                         v-scroll:#scroll-target=""
                         column
                         justify-center
                         style="height: 500px"
                         class="scroll-y"
            >
                <v-content style="min-width: 100px; height: 1000px">

                    <v-card v-for="application in jobPostApplications" :key="application.id"
                            style="min-width: 100px;">
                        <v-card v-if="application.cv_folder_id===cvFolder.id"
                                @drag="setMovingApplication(application.id)">
                            <draggable v-model="cvFolderApplications" :options="{group:'applications',animation:200}"
                                       style=" min-height: 10px;" @start="drag=true"
                                       @end="drag=false">
                                <application :info="application"
                                ></application>
                            </draggable>
                        </v-card>

                    </v-card>
                </v-content>
            </v-card-text>
            <v-btn v-if="cvFolder.next_page" @click="loadMoreApplications(cvFolder.id)">بیشتر</v-btn>
        </v-card>
        <v-spacer></v-spacer>
    </v-flex>
</template>

<script>
    import {mapGetters} from 'vuex'
    import application from "./cvFolders/application";
    import draggable from 'vuedraggable'
    import {MOVING_APPLICATION} from "@/store/application/mutationTypes";
    import {TARGET_CV_FOLDER} from "@/store/cvFolder/mutationTypes";

    export default {
        name: "cvFolder",
        props: ['cvFolder'],
        components: {application, draggable},
        computed: {
            ...mapGetters(['jobPostApplications']),
            cvFolderApplications: {
                get() {
                    return this.$store.getters.cvFolderApplications
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
                i: 2
            }
        },
        mounted() {

            if (this.cvFolder.name === 'صف انتظار') {
                this.color = '#0066cc'
            }
            if (this.cvFolder.name === 'قابل تامل') {
                this.color = 'yellowgreen'
            }
            if (this.cvFolder.name === 'رد شده') {
                this.color = '#cc0000'
            }
            if (this.cvFolder.name === 'دعوت به مصاحبه') {
                this.color = '#00cc00'
            }

        },
        methods: {
            setMovingApplication(applicationId) {
                this.$store.dispatch('setMovingApplication', applicationId);
                console.log('id' + applicationId)
            },
            changeApplicationCvFolder(cvFolderId) {
                this.$store.commit('TARGET_CV_FOLDER', cvFolderId);
                this.$store.dispatch('changeApplicationCvFolder')
            },
            loadMoreApplications(id) {
                this.$store.dispatch('loadMoreApplications', {cvFolderId: id, page: this.i});
                this.i++;
                console.log(this.i)
            }

        }

    }
</script>

<style scoped>

</style>
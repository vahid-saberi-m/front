<template>
    <div class="text-xs-center" v-if="applicationViewCv">
        <v-dialog
                v-model="dialog"
                width="100%"
        >


            <v-card style="direction: rtl">
                <v-card-title
                        class="headline grey lighten-2"
                        primary-title
                >

                </v-card-title>

                <v-card-text>
                    <v-container  text-xs-center>

                        <v-layout row >
                            <v-flex xs5>

                                <applicant-info-card></applicant-info-card>
                                <cv-view-cv-folder  :id="applicationViewCv.cv_folder_id"></cv-view-cv-folder>
                            </v-flex>
                            <v-flex xs 7>
                                <cv-pdf-viewer :address="applicationViewCv.cv"></cv-pdf-viewer>
                                <cv-foldr-stash :id="applicationViewCv.cv_folder_id" ></cv-foldr-stash>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="primary"
                            flat
                            @click="dialog = false"
                    >
                        خروج
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import ApplicantInfoCard from "./cvView/ApplicantInfoCard";
    import CvFolder from "./cvFolder";
    import CvFoldrStash from "./cvView/cvFolderStash";
    import CvPdfViewer from "./cvView/cvPdfViewer";
    import CvViewCvFolder from "./cvView/cvViewCvFolder";

    export default {
        name: "cvView",
        components: {CvViewCvFolder, CvPdfViewer, CvFoldrStash, CvFolder, ApplicantInfoCard},
        computed: {
            ...mapGetters(['applicationDialog', 'applicationViewCv']),
            dialog: {
                get() {
                    return this.$store.getters['applicationDialog']
                },
                set() {
                    this.$store.commit('APPLICATION_DIALOG')
                },
            }
        },
        created(){
        }

    }
</script>

<style scoped>

</style>
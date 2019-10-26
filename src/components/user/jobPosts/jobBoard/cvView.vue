<template>
    <div class="text-xs-center" v-if="applicationViewCv">



            <div class="application-modal">
                <div class="card-header"
                >

                </div>

                <div class="card-body">
                    <div class="cv-info">

                        <applicant-info-card></applicant-info-card>
                        <cv-foldr-stash :id="applicationViewCv.cv_folder_id"></cv-foldr-stash>
                        <cv-view-cv-folder :id="applicationViewCv.cv_folder_id"></cv-view-cv-folder>
                    </div>
                    <div class="pdf-view">
                        <cv-pdf-viewer :address="applicationViewCv.cv"></cv-pdf-viewer>
                    </div>
                </div>
                <div class="card-footer">
                    <button class="btn btn-secondary"
                            @click="dialog = false"
                    >
                        خروج
                    </button>
                </div>
            </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import ApplicantInfoCard from "./cvView/ApplicantInfoCard";
    import CvFolder from "./jobBoard/cvFolder";
    import CvFoldrStash from "./cvView/cvFolderStash";
    import CvPdfViewer from "./cvView/cvPdfViewer";
    import CvViewCvFolder from "./cvView/cvViewCvFolder";

    export default {
        name: "cvView",
        components: {CvViewCvFolder, CvPdfViewer, CvFoldrStash, CvFolder, ApplicantInfoCard},
        computed: {
            ...mapGetters(['applicationDialog', 'applicationViewCv']),

        },
        created() {
        }

    }
</script>

<style lang="scss" scoped>
    @import "../../../../styles/user/jobBoard/cvView";
</style>

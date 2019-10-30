<template>
    <div class="card text-xs-center" v-if="applicationViewCv">



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
                      <application-comments></application-comments>
                    </div>
                </div>

            </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import ApplicantInfoCard from "./cvView/ApplicantInfoCard";
    import applicationComments from "./cvView/applicationComment";
    import CvFolder from "./jobBoard/cvFolder";
    import CvFoldrStash from "./cvView/cvFolderStash";
    import CvPdfViewer from "./cvView/cvPdfViewer";
    import CvViewCvFolder from "./cvView/cvViewCvFolder";

    export default {
        name: "cvView",
        watch: {
            '$route': function (refreshPage) {
                var id = this.$store.state.route.params.id;
                this.$store.dispatch('applicationViewCv',id);
            },
        },
        components: {CvViewCvFolder, CvPdfViewer, CvFoldrStash, CvFolder, ApplicantInfoCard,applicationComments},
        data() {
            return {
                id: this.$route.params.id,
            }
        },
        computed: {
            ...mapGetters(['applicationDialog', 'applicationViewCv']),

        },
        created() {
            this.$store.dispatch('applicationViewCv',this.id);
        }

    }
</script>

<style lang="scss" scoped>
    @import "../../../../styles/user/jobBoard/cvView";
</style>

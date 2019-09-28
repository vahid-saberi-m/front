<template>
    <div >
        <cvView :dialog="applicationDialog" ></cvView>

        <div class="cv-folders">
            <cv-folder v-for="cvFolder in cvFolders" :key="cvFolder.id" :cvFolder="cvFolder"></cv-folder>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import cvFolder from "./jobBoard/cvFolder";
    import cvView from "./cvView"
    import application from './jobBoard/cvFolders/application'

    export default {
        name: "jobBoard",
        components: {cvFolder, cvView,application},
        data() {
            return {
                id: this.$route.params.id,
                dialog: false
            }
        },
        computed: {
            ...mapGetters(['cvFolders','applicationDialog'])
        },
        created() {
            // this.$store.dispatch('retrieveCvFolders', this.id);
            this.$store.dispatch('jobBoard',this.id);
        },
        mounted(){
    },
        methods:{
        }
    }
</script>

<style lang="scss" scoped>
  @import "../../../../styles/user/jobBoard/jobBoard.scss";
</style>

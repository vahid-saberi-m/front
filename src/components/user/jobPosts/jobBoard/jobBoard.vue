<template>
    <div >


      <div @click.prevent="onJobPostEmailTemplateModal(id) " class="tools">
            <button  class="btn ">
                <i class="material-icons">mail</i>
                <br>
                <b>
                    ایمیل دریافت رزومه
                </b>

            </button>
        </div>
      <v-dialog
        v-model="jobBoardModal"
        width="96vw"
      >


        <router-view></router-view>
        <div class="card-footer">
          <button class="btn btn-secondary"
                  @click="jobBoardModal = false"
          >
            خروج
          </button>
        </div>
      </v-dialog>
        <div class="cv-folders">
            <cv-folder v-for="cvFolder in cvFolders" :key="cvFolder.id" :cvFolder="cvFolder"></cv-folder>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import cvFolder from "./jobBoard/cvFolder";
    import cvView from "./cvView"
    export default {
        name: "jobBoard",
        components: {cvFolder, cvView},
        data() {
            return {
                id: this.$route.params.id,
            }
        },
        computed: {
            ...mapGetters(['cvFolders','applicationDialog','emailTemplateModal', ]),
            jobBoardModal: {
                get() {
                    return this.$store.getters['jobBoardModal']
                },
                set() {
                    this.$store.commit('JOB_BOARD_MODAL')
                },
            },
        },
        created() {
            // this.$store.dispatch('retrieveCvFolders', this.id);
            this.$store.dispatch('jobBoard',this.id);
        },
        mounted(){
    },
        methods:{
            onJobPostEmailTemplateModal(id){
                this.$store.commit('JOB_BOARD_MODAL',true);
                this.$router.push({name: 'jobPostEmail', params:{id: id} })
            }
        }
    }
</script>

<style lang="scss" scoped>
  @import "../../../../styles/user/jobBoard";
</style>

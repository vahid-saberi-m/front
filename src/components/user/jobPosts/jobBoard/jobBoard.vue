<template>
    <div >
      <v-dialog
        v-model="dialog"
        width="96vw"
      >
        <router-view name="cvView"></router-view>
      </v-dialog>

      <div @click.prevent="onJobPostEmailTemplateModal " class="tools">
            <button  class="btn ">
                <i class="material-icons">mail</i>
                <br>
                <b>
                    ایمیل دریافت رزومه
                </b>

            </button>
        </div>
      <v-dialog
        v-model="emailTemplateModal"
        width="96vw"
      >


        <router-view></router-view>
        <div class="card-footer">
          <button class="btn btn-secondary"
                  @click="emailTemplateModal = false"
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
            emailTemplateModal: {
                get() {
                    return this.$store.getters['emailTemplateModal']
                },
                set() {
                    this.$store.commit('EMAIL_TEMPLATE_MODAL')
                },
            },
            dialog: {
                get() {
                    return this.$store.getters['applicationDialog']
                },
                set() {
                    this.$store.commit('APPLICATION_DIALOG')
                },
            }
        },
        created() {
            // this.$store.dispatch('retrieveCvFolders', this.id);
            this.$store.dispatch('jobBoard',this.id);
        },
        mounted(){
    },
        methods:{
            onJobPostEmailTemplateModal(){
                this.$store.commit('EMAIL_TEMPLATE_MODAL');
                this.$router.push({name: 'jobPostEmail', params:{id: this.id} })
            }
        }
    }
</script>

<style lang="scss" scoped>
  @import "../../../../styles/user/jobBoard";
</style>

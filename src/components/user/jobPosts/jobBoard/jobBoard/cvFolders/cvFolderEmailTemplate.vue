<template>
  <div class="card">
    <div class="card-header"
    >

    </div>

    <div class="card-body">
      <div class="cv-info">
        <textarea aria-label="ایمیل ارسالی" v-model="cvFolderEmailTemplate" class=""></textarea>
      </div>

    </div>

    <button class="btn btn-primary"
            @click="updateCvFolderEmailTemplate()"
    >
      اعمال
    </button>

  </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "cvFolderEmailTemplate",
        watch: {
            '$route': function (refreshPage) {
                var cvFolder = this.$store.state.route.params.cvFolder;
                this.$store.dispatch('retrieveCvFolderEmail', cvFolder)

            },
        },
        data() {
            return {
                id: this.$route.params.cvFolder,
            }
        },
        mounted(){
            console.log('dfassdafdf ' + this.id);
            this.$store.dispatch('retrieveCvFolderEmail',this.id)
        },
        computed: {
            ...mapGetters(['cvFolderEmailTemplate','emailTemplateModal', ]),
            emailTemplateModal: {
                get() {
                    return this.$store.getters['emailTemplateModal']
                },
                set() {
                    this.$store.commit('EMAIL_TEMPLATE_MODAL')
                },
            },
            cvFolderEmailTemplate:{
                get() {
                    return this.$store.getters['cvFolderEmailTemplate']
                },
                set(payload) {
                    this.$store.commit('CV_FOLDER_EMAIL_template',payload)
                },
            },

        },
        methods:{
            updateCvFolderEmailTemplate(){
                this.$store.dispatch( 'updateCvFolderEmailTemplate',{id: this.id,
                    template: {'email_template':this.cvFolderEmailTemplate}})
            }
        }
    }
</script>

<style scoped>

</style>

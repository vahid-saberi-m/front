<template>
  <div class="card">
    <div class="card-header"
    >

    </div>

    <div class="card-body">
      <div class="cv-info">
        <textarea aria-label="ایمیل ارسالی" v-model="jobPostEmailTemplate" class=""></textarea>
      </div>

    </div>

      <button class="btn btn-primary"
              @click="updateJobPostEmailTemplate()"
      >
        اعمال
      </button>

  </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "jobPostEmailTemplate",
        data() {
            return {
                id: this.$route.params.id,
            }
        },
        computed: {
            ...mapGetters(['jobPostEmailTemplate','jobBoardModal' ]),
            jobBoardModal: {
                get() {
                    return this.$store.getters['jobBoardModal']
                },
                set(payload) {
                    this.$store.commit('JOB_BOARD_MODAL', payload)
                },
            },
            jobPostEmailTemplate:{
                get() {
                    return this.$store.getters['jobPostEmailTemplate']
                },
                set(template) {
                    this.$store.commit('JOB_POST_EMAIL_TEMPLATE',template)
                },
            },

        },
        methods:{
            updateJobPostEmailTemplate(){
                console.log('jp email template'+this.id);
                this.$store.dispatch( 'updateJobPostEmailTemplate',{id: this.id,
                    template: {'email_template':this.jobPostEmailTemplate}})
            }
        }
    }
</script>

<style scoped>

</style>

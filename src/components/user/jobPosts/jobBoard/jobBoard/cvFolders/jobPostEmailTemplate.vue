<template>
    <div class="card">
        <div class="card-header"
        >
            <label class="text-label" for="email-template"><b> قالب ایمیل: </b></label>

        </div>
        <div class="card-body">
            <textarea v-model="jobPostEmailTemplate" class="form-control" rows="5" id="email-template"></textarea>

            <button class="btn btn-primary"
                    @click="updateCvFolderEmailTemplate()"
            >
                اعمال
            </button>
        </div>
        <li> شما می توانید در اینجا یک قالب ایمیل داشته باشید. این ایمیل بصورت خودکار برای تمامی کسانی که رزومه خود را برای این کار ارسال کنند، ارسال خواهد شد.
        </li>
        <li>جهت قرار دادن نام کاربر در متن از {{name}} و جهت قراردادن نام شرکت خود در قالب از {{company}} استفاده
            کنید.
        </li>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "jobPostEmailTemplate",
        data() {
            return {
                id: this.$route.params.jobPostId,
            }
        },
        computed: {
            ...mapGetters(['jobPostEmailTemplate', 'jobBoardModal']),
            jobBoardModal: {
                get() {
                    return this.$store.getters['jobBoardModal']
                },
                set(payload) {
                    this.$store.commit('JOB_BOARD_MODAL', payload)
                },
            },
            jobPostEmailTemplate: {
                get() {
                    return this.$store.getters['jobPostEmailTemplate']
                },
                set(template) {
                    this.$store.commit('JOB_POST_EMAIL_TEMPLATE', template)
                },
            },

        },
        methods: {
            updateJobPostEmailTemplate() {
                console.log('jp email template' + this.id);
                this.$store.dispatch('updateJobPostEmailTemplate', {
                    id: this.id,
                    template: {'email_template': this.jobPostEmailTemplate}
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../../../../styles/user/jobBoard/cvFolders/jobPostEmailTemplate";
</style>

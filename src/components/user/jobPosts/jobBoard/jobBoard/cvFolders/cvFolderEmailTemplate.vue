<template>
    <div class="card">
        <div class="card-header">

            <label class="text-label" for="email-template"><b> قالب ایمیل: </b></label>
        </div>
        <div class="card-body">
            <textarea v-model="cvFolderEmailTemplate" class="form-control" rows="5" id="email-template"></textarea>

            <button class="btn btn-primary"
                    @click="updateCvFolderEmailTemplate()"
            >
                اعمال
            </button>
        </div>
        <li> شما می توانید در اینجا یک قالب ایمیل داشته باشید. این ایمیل بصورت خودکار برای تمامی کسانی که رزومه آنها به این ستون منتقل شود ارسال خواهد شد.</li>
        <li>جهت قرار دادن نام کاربر در متن از {{name}}  و جهت قراردادن نام شرکت خود در قالب از  {{company}} استفاده کنید.</li>

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
        mounted() {
            console.log('dfassdafdf ' + this.id);
            this.$store.dispatch('retrieveCvFolderEmail', this.id)
        },
        computed: {
            ...mapGetters(['cvFolderEmailTemplate', 'emailTemplateModal',]),
            emailTemplateModal: {
                get() {
                    return this.$store.getters['emailTemplateModal']
                },
                set() {
                    this.$store.commit('EMAIL_TEMPLATE_MODAL')
                },
            },
            cvFolderEmailTemplate: {
                get() {
                    return this.$store.getters['cvFolderEmailTemplate']
                },
                set(payload) {
                    this.$store.commit('CV_FOLDER_EMAIL_template', payload)
                },
            },

        },
        methods: {
            updateCvFolderEmailTemplate() {
                this.$store.dispatch('updateCvFolderEmailTemplate', {
                    id: this.id,
                    template: {'email_template': this.cvFolderEmailTemplate}
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../../../../styles/user/jobBoard/cvFolders/cvFolderEmailTemplate";
</style>

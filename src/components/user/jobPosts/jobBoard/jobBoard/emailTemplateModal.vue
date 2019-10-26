<template>
    <v-dialog
            v-model="emailTemplateModal"
            width="96vw"
    >


        <div class="card">
            <div class="card-header"
            >

            </div>

            <div class="card-body">
                <div class="cv-info">

                    <input type="text" class=""/>
                </div>
                <div class="pdf-view">
                </div>
            </div>
            <div class="card-footer">
                <button class="btn btn-secondary"
                        @click="emailTemplateModal = false"
                >
                    خروج
                </button>
            </div>
        </div>
    </v-dialog>

</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "emailTemplateModal",
        computed: {
            ...mapGetters(['emailTemplateModal',]),
            dialog: {
                get() {
                    return this.$store.getters['emailTemplateModal']
                },
                set() {
                    this.$store.commit('EMAIL_TEMPLATE_MODAL')
                },
            }
        },
    }
</script>

<style scoped>

</style>
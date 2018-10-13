<template>
    <div class="text-xs-center">
        <v-dialog
                v-model="applyModal"
                width="500"
                lazy
        >


            <v-card>
               <check-applicant v-if="applyStep===1"></check-applicant>
                <applied-before v-if="applyStep===2 && appliedBefore"></applied-before>
                <questions v-if="applyStep===2 && !appliedBefore"></questions>
                <apply-form v-if="applyStep===3 && !appliedBefore"></apply-form>
                <applied-successfully v-if="applyStep===4"></applied-successfully>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
        import {mapGetters} from 'vuex'
        import CheckApplicant from "./applyModal/checkApplicant";
        import ApplyForm from "./applyModal/applyForm";
        import AppliedSuccessfully from "./applyModal/appliedSuccessfully";
        import AppliedBefore from "./applyModal/appliedBefore";
        import Questions from "./applyModal/questions";
    export default {
        name: "applyModal",
        components: {Questions, AppliedBefore, AppliedSuccessfully, ApplyForm, CheckApplicant},
        computed:{
            ...mapGetters(['applyModal','applyStep','applyJobPost','appliedBefore'])
        },
        data(){
            return{
                email:null
            }
        },
        created(){
        }
    }
</script>

<style scoped>

</style>
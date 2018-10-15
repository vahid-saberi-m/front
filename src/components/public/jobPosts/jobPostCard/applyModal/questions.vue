<template>
    <div>
        <v-card-text v-for="applyJobPostQuestion in applyJobPostQuestions" :key="applyJobPostQuestion.id">
            <v-container fluid>
            <p>{{applyJobPostQuestion.question}}</p>
                <v-radio-group v-model="answer" :mandatory="false">
                    <v-radio :label="applyJobPostQuestion.answer_1" :value="value_1"></v-radio>
                    <v-radio :label="applyJobPostQuestion.answer_2" :value="value_2"></v-radio>
                    <v-radio :label="applyJobPostQuestion.answer_3" :value="value_3"></v-radio>
                    <v-radio :label="applyJobPostQuestion.answer_4" :value="value_4"></v-radio>
                </v-radio-group>
            </v-container>
            <v-text-field type="email" style="direction: ltr" ></v-text-field>
            <v-btn
                    @click="answerCheck"
            >ارسال</v-btn>
        </v-card-text>



        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="primary"
                    flat
                    @click="dialog = false"
            >
                I accept
            </v-btn>
        </v-card-actions>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {NEXT_STEP} from "../../../../../store/application/mutationTypes";
    export default {
        name: "questions",
        computed:{
            ...mapGetters (['applyJobPostQuestions','applyJobPost']),
        },
        data(){
            return{
                answer:{
                },

            }
        },
        created(){
            if(!this.applyJobPostQuestions){
                this.$store.commit('NEXT_STEP')
            }
        },
        methods:{
            answerCheck(){
                this.$store.commit(NEXT_STEP)
            }
        }
    }
</script>

<style scoped>

</style>
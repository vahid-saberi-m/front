<template>
    <div>
        <v-card-text v-for="applyJobPostQuestion in applyJobPostQuestions" :key="applyJobPostQuestion.id">
            <v-container fluid>
            <p>{{applyJobPostQuestion.question}}</p>
                <v-radio-group v-model="answer" :mandatory="false" @change="answerFill(applyJobPostQuestion.id)">
                    <v-radio :label="applyJobPostQuestion.answer_1" :value="'value_1'"></v-radio>
                    <v-radio :label="applyJobPostQuestion.answer_2" :value="'value_2'"></v-radio>
                    <v-radio :label="applyJobPostQuestion.answer_3" :value="'value_3'"></v-radio>
                    <v-radio :label="applyJobPostQuestion.answer_4" :value="'value_4'"></v-radio>
                </v-radio-group>
            </v-container>
        </v-card-text>
        <v-btn
                @click="answerCheck"
        >ارسال
        </v-btn>

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
            },
            answerFill(id,){
                console.log(id)
            }
        }
    }
</script>

<style scoped>

</style>
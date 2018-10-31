<template>
    <div>

            <v-card-text >
                لطفا آدرس ایمیل خود را وارد نمایید:
                <v-text-field type="email" style="direction: ltr" v-model="email"></v-text-field>
                <v-btn
                        @click="checkApplicant()"
                >ارسال</v-btn>
            </v-card-text>




    </div>
</template>

<script>
    import {mapGetters} from 'vuex'


    export default {
        name: "checkApplicant",
        data(){
            return{
                email:null,
            }
        },
        computed:{
            ...mapGetters(['applyJobPost'])
        },
        created(){
            this.$store.dispatch('applyJobPostQuestions',this.applyJobPost.id);
        },
        methods:{
            checkApplicant(){
                this.$store.dispatch('checkApplicant',this.email);
            }
        }
    }
</script>

<style scoped>

</style>
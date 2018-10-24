<template>
    <v-card light style="background-color: antiquewhite">
        <v-card-title>
            <v-layout row wrap>
                <v-flex xs2>
                    <v-btn @click="show=1">درباره ما</v-btn>
                </v-flex>
                <v-flex xs2>
                    <v-btn  @click="show=2">چرا اینجا؟</v-btn>
                </v-flex>
                <v-flex xs2>
                    <v-btn @click="show=3">مراحل استخدام</v-btn>
                </v-flex>
                <v-flex xs2>
                    <v-btn  @click="show=4">اطلاعات تماس</v-btn>
                </v-flex>
            </v-layout>
        </v-card-title>
        <v-card-text>
            <v-card>
                <v-card-text v-if="show===1">
                    {{company.about_us}}
                </v-card-text>
                <v-card-text v-if="show===2">
                    {{company.why_us}}
                </v-card-text>
                <v-card-text v-if="show===3">
                    {{company.recruiting_steps}}
                </v-card-text>
                <v-card-text v-if="show===4">
                    <p>
                        ایمیل شرکت:{{company.email}}
                    </p>
                    <p>
                        شماره تماس:{{company.phone_number}}
                    </p>
                    <p>
                        آدرس:{{company.address}}
                    </p>
                </v-card-text>
            </v-card>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "aboutCompany",
        props:['company'],
        data(){
            return{
                show:1
            }
        },
        methods:{
        }
    }
</script>

<style scoped>

</style>
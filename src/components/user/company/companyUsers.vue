<template>
    <v-container style="direction: rtl  " >
        <v-content v-for="user in getCompanyUsers" :key="user.id">
        <v-card >
            <v-card-title v-if="user.is_approved" style="background-color: greenyellow" >
                <b >{{user.name}}</b>
                <v-spacer></v-spacer>
                <v-badge v-if="user.role==='admin'">
                    <v-icon>account_box</v-icon>
                </v-badge>
            </v-card-title>
            <v-card-title v-if="!user.is_approved" style="background-color: red" >
                <b>{{user.name}}</b>
                <v-spacer></v-spacer>
                <v-badge v-if="user.role==='admin'">
                    <v-icon>account_box</v-icon>
                </v-badge>
            </v-card-title>
            <v-card-text >
                <v-container>

                <v-layout row>
                    <v-flex xs4>
                      <p class="text-right">
                          {{user.position}}
                      </p>
                        <v-layout  v-if="!user.is_approved">
                          <v-btn color="green" @click="userApproval(user.id)" dark>تایید</v-btn>
                          <v-btn color="red" @click="disOwnUser(user.id)"  dark >حذف</v-btn>
                        </v-layout>
                        <v-layout  v-if="(user.is_approved) && !(user.role==='admin')">
                            <v-btn color="yellow"  @click="userApproval(user.id)">تعلیق</v-btn>
                            <v-btn color="red"  @click="disOwnUser(user.id)" dark>حذف</v-btn>
                        </v-layout>
                    </v-flex>
                    <v-flex xs4>

                    </v-flex>
                    <v-flex xs4 class="text-left">
                        <v-avatar
                                size="100"
                                color="grey lighten-4"
                        >
                        <v-img :src="user.image"></v-img>
                        </v-avatar>
                    </v-flex>
                </v-layout>
                </v-container>
            </v-card-text>

        </v-card>
            <v-divider></v-divider>
        </v-content>

    </v-container>

</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "companyUsers",
        components: {},
        computed:{
            ...mapGetters(['getCompanyUsers','userInfo',])
        },
        data(){
            return{
                users:null
            }
        },
        created(){
            this.$store.dispatch('companyUsers', this.userInfo.company_id);
                this.users=this.getCompanyUsers
        },
        methods:{
            userApproval(id){
                this.$store.dispatch('userApproval',id)
            },
            disOwnUser(id){
                this.$store.dispatch('disOwnUser',id)
            }
        }
    }
</script>

<style scoped>

</style>
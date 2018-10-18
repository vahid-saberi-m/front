<template>
    <v-container style="direction: rtl  " >
            <v-card >
                <v-card-title v-if="userInfo.is_approved" style="background-color: greenyellow" >
                    <b >{{userInfo.name}}</b>
                    <v-spacer></v-spacer>
                    <v-badge v-if="userInfo.role==='admin'">
                        <v-icon>account_box</v-icon>
                    </v-badge>
                </v-card-title>
                <v-card-title v-if="!userInfo.is_approved" style="background-color: red" >
                    ویرایش اطلاعات:
                </v-card-title>
                <v-card-text >
                    <v-container>
                        <v-layout row>
                            <v-flex xs4>
                                <v-text-field lable="نام و نام خانوادگی" box v-model="name" >
                                </v-text-field>
                                <v-text-field box v-model="position">
                                </v-text-field>
                                <v-input box>
                                    <input type="file" @change="changeImage" accept="*/img">
                                </v-input>

                                    <v-btn color="green" @click="updateUser(userInfo.id)" dark>ویرایش</v-btn>
                            </v-flex>
                            <v-flex xs4>

                            </v-flex>
                            <v-flex xs4 class="text-left">
                                <v-avatar
                                        size="100"
                                        color="grey lighten-4"
                                >
                                    <v-img :src="userInfo.image"></v-img>
                                </v-avatar>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>

            </v-card>
            <v-divider></v-divider>

    </v-container>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "editProfile",
        computed: {
            ...mapGetters(['userInfo']),
        },
        data(){
            return{
                name:null,
                email:null,
                position:null,
                image:null,
            }
        },
        created(){
            this.name=this.userInfo.name;
            this.email=this.userInfo.email;
            this.position=this.userInfo.position;
        },
        methods:{
            changeImage(){
                this.image= event.target.files[0]
            },
            updateUser(id){
                console.log(this.image);
                this.$store.dispatch('updateUser',{
                    id:id,
                    name:this.name,
                    position:this.position,
                    image:this.image
                })
            }
        }
    }
</script>

<style scoped>

</style>
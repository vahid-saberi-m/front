<template>
    <div class="row card-header " style="margin-top: 2%">
        <div class="col-3">
            <button class="btn btn-outline-success" style="height: 40px" v-if="!loggedIn" data-dismiss="modal" @click="showModal=true">ورود/عضویت</button>
            <button class="btn btn-outline-primary " style="height: 40px" v-if="loggedIn" data-dismiss="modal" @click="logOut">خروج</button>
            <button class="btn btn-outline-success  " style="height: 40px" v-if="loggedIn" data-dismiss="modal" @click=" $router.push('/user/choose-company')">پنل کاربری</button>
        </div>
        <div class="col-7"></div>
        <div class="col-2">
            <img src="../assets/wings-logo.png" style="height: 40px; float: right"/>
        </div>

        <login-modal v-if="showModal" @close="showModal=false"></login-modal>


    </div>
</template>
<script>
    import loginModal from "./loginModal";

    export default {
        name: "balatarHeader",
        components: {loginModal},
        data() {
            return {
                showModal: false
            }
        },
        computed:{
            loggedIn(){
                return this.$store.getters.loggedIn
            }
        },
        methods:{
            logOut(){
                this.$store.dispatch('logOut')
                    .then(response => {
                        this.$router.push('/introduction')
                    })
            }
        }
    }

</script>


<style scoped>
    .row {
        margin-bottom: 10px;
    }

    #login {
        text-align: right;
    }
</style>
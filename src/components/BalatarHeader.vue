<template>
    <div class="row" style="margin-top: 2%">
        <div class="col-3">
            <button class="btn btn-outline-success" v-if="!loggedIn" data-dismiss="modal" @click="showModal=true">ورود/عضویت</button>
            <button class="btn btn-outline-primary" v-if="loggedIn" data-dismiss="modal" @click="logOut">خروج</button>
        </div>
        <div class="col-8"></div>
        <div class="col-1">
            <img src="../assets/wings-logo.png" height="40"/>
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
<template>
    <div class="row card-header " style="margin-top: 2%">
        <div class="col-3">
            <button class="btn btn-outline-success" style="height: 40px" v-if="!loggedIn" data-dismiss="modal"
                    @click="showModal=true">ورود/عضویت
            </button>
            <button class="btn btn-outline-primary " style="height: 40px" v-if="loggedIn" data-dismiss="modal"
                    @click="logOut">خروج
            </button>
            <button class="btn btn-outline-success  " style="height: 40px" v-if="loggedIn" data-dismiss="modal"
                    @click="userDashboard ">پنل کاربری
            </button>
        </div>
        <div class="col-7"></div>
        <div class="col-2">
            <img src="../assets/wings-logo.png" style="height: 40px; float: left"/>
        </div>

        <login-modal v-if="showModal" @close="showModal=false"></login-modal>


    </div>
</template>
<script>
    import loginModal from "./loginModal";
    import {mapGetters} from 'vuex'

    export default {
        name: "balatarHeader",
        components: {loginModal},
        data() {
            return {
                showModal: false,
            }
        },
        computed: {
            ...mapGetters(['userInfo']),
            loggedIn() {
                return this.$store.getters.isLoggedIn
            },
        },
        methods: {
            logOut() {
                this.$store.dispatch('logOut')
                    .then(response => {
                        this.$router.push('/introduction')
                    })
            },
            userDashboard() {
                if (this.userInfo.company_id) {
                    this.$router.push('/user/')
                } else {
                    this.$router.push('/user/choose-company')
                }
            }
        },

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

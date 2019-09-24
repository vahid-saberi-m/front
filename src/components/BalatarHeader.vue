<template>
  <div class="balatar-header " >
    <div class="buttons">
      <button class="btn btn-outline-success" v-if="!loggedIn" data-dismiss="modal"
              @click="showModal=true">ورود/عضویت
      </button>
      <button class="btn btn-outline-primary " v-if="loggedIn" data-dismiss="modal"
              @click="logOut">خروج
      </button>
      <button class="btn btn-outline-success  " v-if="loggedIn" data-dismiss="modal"
              @click="userDashboard ">پنل کاربری
      </button>
    </div>
      <img class="logo" src="../assets/wings-logo.png" alt="logo" />

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


<style scoped lang="sass">
  @import "../styles/BalatarHeader.scss"
</style>

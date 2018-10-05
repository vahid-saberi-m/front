<template>
    <!-- The Modal -->
    <div class="modal " id="myModal" style="display: block">
        <div class="modal-dialog ">
            <div class="modal-content">
                <!-- Modal Header -->
                <div class="modal-header">
                    <button type="button" class="close" style="float: left" @click="$emit('close')">&times;</button>
                </div>
                <registerModal v-if="register" @login="register=0"></registerModal>
                <div v-if="!register">

                    <!-- Modal body -->
                    <div class="modal-body">
                        <form style="text-align: right" @submit="login">
                            <div class="form-group">
                                <label for="exampleInputEmail1">نام کاربری</label>
                                <input type="email" class="form-control" name="email" id="exampleInputEmail1"
                                       aria-describedby="emailHelp" placeholder="نشانی ایمیل شما" v-model="email">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">رمز عبور</label>
                                <input type="password" name="password" class="form-control" id="exampleInputPassword1"
                                       placeholder="رمز عبور" v-model="password">
                            </div>

                            <button type="submit" @click.prevent="login" class="btn btn-primary">ورود</button>
                            <button type="button" class="btn btn-danger" data-dismiss="modal" @click="$emit('close')">
                                خروج
                            </button>
                            <button @click.prevent="register=1">عضو شوید</button>
                        </form>
                    </div>
                </div>
                <!-- Modal footer -->
                <div class="modal-footer">
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import registerModal from './register'
    import {mapGetters} from 'vuex'

    export default {
        name: "loginModal",
        components: {registerModal},
        data() {
            return {
                email: '',
                password: '',
                register: 0
            }
        },
        computed: mapGetters({
            isLoggedIn: 'isLoggedIn',
            hasApprovedCompany: 'hasApprovedCompany'
        }),
        methods: {
            login: function () {
                this.$store.dispatch('retrieveToken', {
                    username: this.email,
                    password: this.password
                })/*
                    .then(response => {
                        this.$store.dispatch('checkUser')
                            .then(response =>{
                                if (response.data.data.company_id&&response.data.data.is_approved){
                                    this.$router.push('/user/dashboard')
                                }else {
                                    this.$router.push('/user/choose-company');
                                    console.log(response);
                                    console.log(response.data.data.is_approved);
                                }
                            })
                    })*/
            },

        }
    }
</script>

<style scoped>

</style>
<template>
    <!-- The Modal -->
    <div class="modal " id="myModal" style="display: block">
        <div class="modal-dialog ">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <button type="button" class="close" style="float: left" @click="$emit('close')">&times;</button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                        <form style="text-align: right" @submit="login">
                            <div class="form-group" >
                                <label for="exampleInputEmail1">نام کاربری</label>
                                <input type="email" class="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="نشانی ایمیل شما" v-model="email">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">رمز عبور</label>
                                <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="رمز عبور" v-model="password">
                            </div>

                            <button type="submit" @click.prevent="login" class="btn btn-primary">ورود</button>
                            <button type="button" class="btn btn-danger" data-dismiss="modal" @click="$emit('close')">خروج</button>
                        </form>
                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "loginModal",
        data(){
           return{
               email:'',
               password: ''
           }
        },
        methods:{
            login: function () {
                this.$store.dispatch('retrieveToken', {
                    username: this.email,
                    password: this.password
                })
                    .then(response => {
                        this.$emit('close');
                    })
            }
        }
    }
</script>

<style scoped>

</style>
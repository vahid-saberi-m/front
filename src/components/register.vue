<template>

    <div>
        <!-- Modal body -->
        <div class="modal-body">
            <form style="text-align: right" @submit="register">
                <div class="form-group">
                    <label for="exampleInputEmail1">نام </label>
                    <input type="email" class="form-control" name="email" id="دشپث"
                           aria-describedby="emailHelp"  v-model="name">
                    <label for="exampleInputEmail1">آدرس ایمیل</label>
                    <input type="email" class="form-control" name="email" id="exampleInputEmail1"
                           aria-describedby="emailHelp" placeholder="نشانی ایمیل شما" v-model="email">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">رمز عبور</label>
                    <input type="password" name="password" class="form-control" id="exampleInputPassword1"
                           placeholder="رمز عبور" v-model="password">
                    <label for="exampleInputPassword1">تکرار رمز عبور</label>
                    <input type="password" name="password" class="form-control" id="Password-repeat"
                           placeholder="رمز عبور" v-model="confirmPassword">
                </div>

                <button type="submit" @click.prevent="register" class="btn btn-primary">عضویت</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal" @click="$emit('close')">خروج</button>
            </form>
        </div>

        <!-- Modal footer -->
        <div class="modal-footer">
        </div>

    </div>
</template>

<script>
    export default {
        name: "registerModal",
        data() {
            return {
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            }
        },
        methods: {
            register: function () {
                this.$store.dispatch('register', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    confirmPassword: this.confirmPassword
                })
                    .then(response => {
                        this.$emit('login');
                    })
            },
        }
    }
</script>

<style scoped>

</style>
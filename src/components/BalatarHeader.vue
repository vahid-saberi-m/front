<template>
    <div class="row"  style="margin-top: 2%" >
        <div class="col-3">
            <button class="btn btn-outline-success" data-dismiss="modal" @click="showModal=true" >ورود/عضویت</button>
        </div>
        <div class="col-8"></div>
        <div class="col-1">
            <img src="../assets/wings-logo.png" height="40" />
        </div>
        <login-modal v-if="showModal" @close="showModal=false" ></login-modal>


    </div>
</template>
<script>
    import loginModal from "./loginModal";
    export default {
        name: "balatarHeader",
        components: {loginModal},
    data() {
        return{
            showModal:false
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
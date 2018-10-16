<template>
    <div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
    export default {
        name: "editCompany",
        components: {},
        computed:{},
        created(){
          this.$store.dispatch('retrieveCompany')
        },
    }
</script>

<style scoped>

</style>
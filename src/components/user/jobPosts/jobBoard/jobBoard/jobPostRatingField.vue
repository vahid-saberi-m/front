<template>
  <div class="card">

  </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "jobPostRatingField",
        data() {
            return {
                id: this.$route.params.id,
            }
        },
        created() {
            this.$store.dispatch('retrieveJobPostRatingFields', this.id);
        },
    }
</script>

<style scoped>

</style>

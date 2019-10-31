<template>
    <div class="card">
        <div class="card rating-fields">
            <div class="field" v-for="jobPostRatingField in jobPostRatingFields" :key="jobPostRatingField.id"><i @click="deleteJpbPostRatingField(jobPostRatingField.id)" class="material-icons">delete_forever</i> {{jobPostRatingField.field}}</div>
        </div>
        <div class="add-field">
            <label for="new-rating-field">فیلد جدید:</label>
            <input type="text" class="form-control" v-model="ratingField" id="new-rating-field"/>
            <button @click.prevent="addField(jobPostId)" class="btn-primary">اضافه کردن</button>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "jobPostRatingField",
        computed: {
            ...mapGetters['jobPostRatingFields'],
            jobPostRatingFields: {
                get() {
                    return this.$store.getters['jobPostRatingFields']
                },
            },
        },
        data() {
            return {
                jobPostId: this.$route.params.jobPostId,
                ratingField: null,
            }
        },
        created() {
            this.$store.dispatch('retrieveJobPostRatingFields', this.jobPostId);
        },
        methods: {
            addField(jobPostId) {
                this.$store.dispatch('addJobPostRatingField', {
                    id: jobPostId,
                    field: {
                        'field': this.ratingField,
                        'job_post_id': jobPostId,
                    }
                });
                this.ratingField=null;
            },
            deleteJpbPostRatingField(fieldId){
                this.$store.dispatch('deleteJpbPostRatingField', fieldId);

            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../../../styles/user/jobBoard/jobPostRatingFields";
</style>

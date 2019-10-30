<template>
    <div class="comments">
        <div class="card">
            <div class="card-header">
                نظر خود را اضافه کنید
            </div>
            <div class="card-body">
                <div class="form-group">
                    <textarea class="form-control" rows="3" v-model="newComment"/>
                    <button class="btn btn-primary" @click="addNewComment">ثبت</button>
                </div>
            </div>
        </div>
        <div class="previous-comments">
            <div class="card" v-for="comment in applicationViewCv.comments" :key="comment.id">
                <div class="card-body">{{comment.content}}</div>
                <div class="card-footer">
                    <small>{{comment.created_at}} </small>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "applicationComment",
        computed: {
            ...mapGetters(['applicationViewCv']),

        },
        data() {
            return {
                newComment: null
            }
        },
        methods: {
            addNewComment() {
                this.$store.dispatch('addNewComment', {
                    'application': this.$route.params.id,
                    'content': this.newComment
                });
                this.newComment = null;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../../../styles/user/jobBoard/cvView/applicationComment";
</style>
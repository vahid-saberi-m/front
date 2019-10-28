<template>
    <div>
      <div class="card">
        <div class="card-header">
          نظر خود را اضافه کنید
        </div>
        <div class="card-body">
          <div class="form-group">
            <textarea class="form-control" rows="3"/>
            <button class="btn btn-primary">ثبت</button>
          </div>
        </div>
      </div>
      <div class="card"  v-for="comment in applicationViewCv.comments" :key="comment.id">
        <p>{{comment.content}}</p>
        <small>{{comment.created_at}} تاریخ ایجاد:</small>
      </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "applicationComment",
        computed: {
            ...mapGetters([ 'applicationViewCv']),

        },
    }
</script>

<style scoped>

</style>

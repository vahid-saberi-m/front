<template>
    <div class="card">
        <div class="card-header">
            انتقال به یکی از پوشه ها:
        </div>
        <div class="card-body">
            <div class="button-div" v-for="cvFolder in cvFolders" :key="cvFolder.id">
                <button class="btn btn-secondary" v-if="cvFolder.id!==id"
                        @click="changeApplicationCvFolder(cvFolder.id)">
                    {{cvFolder.name}}
                </button>
            </div>
        </div>
    </div>

</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "cvFoldrStash",
        props: ['id'],
        computed: {
            ...mapGetters(['cvFolders'])
        },
        methods: {
            changeApplicationCvFolder(cvFolderId) {
                this.$store.commit('TARGET_CV_FOLDER', cvFolderId);
                this.$store.dispatch('changeApplicationCvFolder')
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../../../styles/user/jobBoard/cvView/cvFolderStash";
</style>
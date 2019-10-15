<template>
  <div  @drop="changeApplicationCvFolder(cvFolder.id)" class="cv-folder">
    <div class="card-header" v-bind:style="{backgroundColor: color + ''}">
      <h5><b>{{cvFolder.name}}</b></h5>
    </div>
    <div>
      <div class="cv-folder-body">

        <draggable v-model="cvFolderApplication" :options="{group:'people'}"
                   style=" min-height: 80vh;" @start="drag=true "
                   @end="drag=false">
          <div  v-for="application in cvFolderApplication" :key="application.id"
                  style="min-width: 100px;">

            <application :info="application"
            ></application>

          </div>
        </draggable>
      </div>
    </div>
      <button :disabled="!cvFolder.next_page " class=" btn btn-secondary more-button "
              @click="loadMoreApplications(cvFolder.id)">بیشتر
      </button>
  </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import application from "./cvFolders/application";
    import draggable from 'vuedraggable'
    import {MOVING_APPLICATION} from "@/store/application/mutationTypes";
    import {TARGET_CV_FOLDER} from "@/store/cvFolder/mutationTypes";

    export default {
        name: "cvFolder",
        props: ['cvFolder'],
        components: {application, draggable},
        computed: {
            cvFolderApplication: {
                get() {
                    return this.$store.getters.cvFolderApplications(this.cvFolder.id)
                },
                set(value) {
                    // this.$store.commit('CV_FOLDER_APPLICATIONS', value)
                    console.log('set');

                }
            }
        },
        data() {
            return {
                movingApplication: null,
                color: null,
                i: 2
            }
        },
        mounted() {
            if (this.cvFolder.name === 'در صف انتظار') {
                this.color = 'rgba(49, 69, 247, 0.7)'
            }
            if (this.cvFolder.name === 'قابل تامل') {
                this.color = 'rgba(139, 195, 74, 0.7)'
            }
            if (this.cvFolder.name === 'مردود') {
                this.color = 'rgba(229, 28, 35, 0.7)'
            }
            if (this.cvFolder.name === 'دعوت به مصاحبه') {
                this.color = 'rgba(37, 155, 36, 0.7)'
            }

        },
        methods: {

            changeApplicationCvFolder(cvFolderId) {
                this.$store.commit('TARGET_CV_FOLDER', cvFolderId);
                this.$store.dispatch('changeApplicationCvFolder')
            },
            loadMoreApplications(id) {
                this.$store.dispatch('loadMoreApplications', {cvFolderId: id, page: this.i});
                this.i++;
            }

        }

    }
</script>

<style lang="scss" scoped>
  @import "../../../../../styles/user/jobBoard/cvFolder";
</style>

<template>
    <v-flex xs3>
        <v-card style="direction: rtl; height:100% ;" dark tile>

            <v-card-title v-bind:style="{backgroundColor: color}">
                <h5><b>{{cvFolder.name}}</b></h5>
            </v-card-title>
            <v-card-text @drop="changeApplicationCvFolder(cvFolder.id)"
                         @dragover=""
                         v-scroll:#scroll-target=""
                         column
                         justify-center
                         style=" overflow-y: auto;"
                         class="scroll-y "
            >
                <v-content style="min-width: 100px; height: 550px">

                    <draggable v-model="cvFolderApplication" :options="{group:'people'}"
                               style=" min-height: 15px;" @start="drag=true "
                               @end="drag=false">
                        <v-card v-for="application in cvFolderApplication" :key="application.id"
                                style="min-width: 100px;">

                                <application :info="application"
                                ></application>

                        </v-card>
                    </draggable>
                </v-content>
            </v-card-text>
            <v-btn v-if="cvFolder.next_page" @click="loadMoreApplications(cvFolder.id)">بیشتر</v-btn>
        </v-card>
        <v-spacer></v-spacer>
    </v-flex>
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
                    this.$store.commit('CV_FOLDER_APPLICATIONS', value)
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
            if (this.cvFolder.name === 'صف انتظار') {
                this.color = '#0066cc'
            }
            if (this.cvFolder.name === 'قابل تامل') {
                this.color = 'yellowgreen'
            }
            if (this.cvFolder.name === 'رد شده') {
                this.color = '#cc0000'
            }
            if (this.cvFolder.name === 'دعوت به مصاحبه') {
                this.color = '#00cc00'
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

<style scoped>

</style>
<template>
    <v-layout>
        <v-flex>
            <v-expansion-panel>
                <v-expansion-panel-content>
                    <div slot="header"><v-icon>add</v-icon></div>
                    <v-card>
                        <v-card-title primary-title>
                            <v-text-field box v-model="title"></v-text-field>
                            <v-spacer></v-spacer>
                            <v-textarea box v-model="content"></v-textarea>
                            <input type="file" accept="image/*" @change="createPhoto">
                        </v-card-title>

                        <v-card-actions>
                            <v-btn flat color="orange" @click="createEvent()">درج</v-btn>
                            <v-btn flat color="orange">حذف</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "createEvent",
        data() {
            return {
                title: null,
                content: null,
                main_photo: null,
            }
        },
        methods: {
            createPhoto() {
                this.main_photo = event.target.files[0]
            },
            createEvent() {
                this.$store.dispatch('createEvent', {
                    title: this.title,
                    content: this.content,
                    main_photo: this.main_photo,
                })
            }
        }
    }
</script>

<style scoped>

</style>
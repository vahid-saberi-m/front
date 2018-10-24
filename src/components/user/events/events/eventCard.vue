<template>
    <v-layout>
        <v-flex>
            <v-card style="height: 100%" class="scroll-y">
                <v-img
                        :src="event.main_photo"
                        aspect-ratio="2.75"
                ></v-img>

                <v-card-title primary-title v-if="edit===false">
                    <div>
                        <h3 class="headline mb-0">{{event.title}}</h3>
                        <div>{{event.content}}</div>
                    </div>
                </v-card-title>
                <v-card-title primary-title v-if="edit!==false">
                    <v-layout row wrap>
                        <v-flex xs9>
                            <v-text-field box  v-model="title"></v-text-field>
                        </v-flex>
                            <v-spacer></v-spacer>
                        <v-flex xs3>
                            <v-btn flat color="orange" @click="edit=false">
                                <v-icon>close</v-icon>
                            </v-btn>
                        </v-flex>
                    </v-layout>
                    <v-textarea box v-model="content"></v-textarea>
                    <input type="file" accept="image/*" @change="changePhoto">
                </v-card-title>

                <v-card-actions>
                    <v-btn flat color="orange" v-if="edit===false" @click="edit=true">ویرایش</v-btn>
                    <v-btn flat color="orange" v-if="edit===true" @click="editEvent(event.id)">اعمال</v-btn>
                    <v-btn flat color="orange" @click="deleteEvent(event.id)">حذف</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "eventCard",
        props: ['event'],
        data() {
            return {
                edit: false,
                title: null,
                content: null,
                main_photo: null,
            }
        },
        created() {
            this.title = this.event.title;
            this.content = this.event.content;
        },
        methods:{
            changePhoto(){
                this.main_photo=event.target.files[0]
            },
            editEvent(id){
                this.$store.dispatch('editEvent',{
                    id:id,
                    title:this.title,
                    content:this.content,
                    main_photo:this.main_photo,
                })
            },
            deleteEvent(id){
                this.$store.dispatch('deleteEvent',id)
            }
        }
    }
</script>

<style scoped>

</style>
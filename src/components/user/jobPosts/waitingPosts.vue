<template>
    <v-container  >
        <user-header></user-header>
        <v-form>

        <v-card v-for="jobPost in jobPosts" style="direction: rtl;">
            <v-expansion-panel
            popout
            >
                <v-expansion-panel-content
                >
                    <slot slot="header" >
                        {{jobPost.title}}
                        <v-spacer></v-spacer>
                    </slot>
                    <v-card>
                        <v-card-text>
                            <v-card-content
                                    name="input-7-1"
                                    label="شرح موقعیت شغلی"
                                    :value=jobPost.description
                                    hint=""
                                    append-icon="edit"
                            >
                                {{jobPost.description}}
                                <v-icon @click="">edit</v-icon>
                            </v-card-content>
                        </v-card-text>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>

            <v-card-text>


            </v-card-text>
        </v-card>
        </v-form>
    </v-container>
</template>

<script>
    import UserHeader from "../userHeader";

    export default {
        name: "waitingPosts",
        components: {UserHeader},
        data() {
            return {
                jobPosts: ''
            }
        },
        mounted() {
            this.$store.dispatch('indexJobPosts', {address: 'index-waiting'})
                .then(response => {
                    this.jobPosts = response.data.data;
                })
        },

    }
</script>

<style scoped>

</style>
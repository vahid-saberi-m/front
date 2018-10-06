<template>
    <v-layout
            wrap
            style="height: 200px;"
    >
            <v-container justify-center >
                <v-toolbar
                        clipped-right
                >
                    <img src="../../assets/wings-logo.png" height="80%">


                    <v-toolbar-items>
                    </v-toolbar-items>
                    <v-spacer></v-spacer>
                    <v-toolbar-side-icon
                            @click.stop="drawer = !drawer"
                    ></v-toolbar-side-icon>
                </v-toolbar>
            </v-container>


        <v-navigation-drawer
                v-model="drawer"
                absolute
                temporary
                right
                class="text-xs-right"

        >
            <v-list class="pa-1">
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <img :src="image">
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                        <v-list-tile-title>
                            <h4>{{name}}</h4>
                            <v-icon @click="logOut">exit</v-icon>
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

            </v-list>
            <v-list class="pt-0" dense>
                <v-divider></v-divider>
                <v-list-tile
                        @click="newPosts"
                >
                    <v-list-tile-action>
                        <v-icon>assignment</v-icon>
                    </v-list-tile-action>
                    درج آگهی
                    <v-list-tile-content>
                        <v-list-tile-title></v-list-tile-title>
                    </v-list-tile-content>

                </v-list-tile>

                <v-list-tile
                        @click="waitingPosts"
                >
                    <v-list-tile-action>
                        <v-icon>stop_screen_share</v-icon>
                    </v-list-tile-action>

                    آگهی های در انتظار تایید
                    <v-list-tile-content>
                        <v-list-tile-title></v-list-tile-title>
                    </v-list-tile-content>

                </v-list-tile>

                <v-list-tile
                        @click="livePosts"
                >
                    <v-list-tile-action>
                        <v-icon>screen_share</v-icon>
                    </v-list-tile-action>
                    آگهی های منتشر شده
                    <v-list-tile-content>
                        <v-list-tile-title></v-list-tile-title>
                    </v-list-tile-content>

                </v-list-tile>


                <v-list-tile
                        @click="expiredPosts"
                >
                    <v-list-tile-action>
                        <v-icon>update</v-icon>
                    </v-list-tile-action>
                    آگهی های منقضی شده
                    <v-list-tile-content>
                        <v-list-tile-title></v-list-tile-title>
                    </v-list-tile-content>

                </v-list-tile>

                <hr>
                <div v-if="role='admin'">

                    <v-list-tile
                            @click=""
                    >
                        <v-list-tile-action>
                            <v-icon>storage</v-icon>
                        </v-list-tile-action>
                        ویرایش سایت
                        <v-list-tile-content>
                            <v-list-tile-title></v-list-tile-title>
                        </v-list-tile-content>

                    </v-list-tile>
                    <hr>
                </div>
                <div v-for="jobPost in jobPosts"
                >

                <v-list-tile
                        @click=""
                >
                    <v-list-tile-action>
                        <v-icon>event_note</v-icon>
                    </v-list-tile-action>
                    {{jobPost.title}}
                    <v-list-tile-content>
                        <v-list-tile-title></v-list-tile-title>
                    </v-list-tile-content>

                </v-list-tile>
                </div>
            </v-list>

        </v-navigation-drawer>
    </v-layout>

</template>

<script>
    export default {
        name: "userHeader",
        data() {
            return {
                drawer: null,
                companyId: this.$store.state.companyId,
                name: this.$store.state.name,
                position: this.$store.state.position,
                email: this.$store.state.email,
                image: this.$store.state.image,
                role: this.$store.state.role,
                company_id: '',
                companyName: '',
                newCompany: '',
                set: '',
                step: 1,
                jobPosts:null

            }
        },
        methods: {
            newPosts: function () {
                this.$router.push('/user/jobPosts/newPost')
            },
            waitingPosts: function () {
                this.$router.push('/user/jobPosts/waitingPosts')
            },
            livePosts: function () {
                this.$router.push('/user/jobPosts/livePosts')
            },
            expiredPosts: function () {
                this.$router.push('/user/jobPosts/expiredPosts')
            },
            logOut(){
                this.$store.dispatch('logOut')
                    .then(response => {
                        this.$router.push('/introduction')
                    })
            }
        },
        created() {
            this.$store.dispatch('getLastFiveJobPost')
                .then(response => {
                    this.jobPosts = this.$store.getters.lastFiveJobPosts;
                    console.log('jobPosts');
                    console.log(this.jobPosts)
                })
        },

    }
</script>

<style scoped>

</style>
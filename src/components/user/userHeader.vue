<template>
    <v-layout
            wrap
            style="height: 200px;"
    >
        <v-container justify-center>
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
                        <img :src="userInfo.image">
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                        <v-list-tile-title>
                            <h4>{{userInfo.name}}</h4>
                            <br>
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
                <v-list-tile
                        @click="logOut"
                >
                    <v-list-tile-action>
                        <v-icon>clear</v-icon>
                    </v-list-tile-action>
                    خروج
                    <v-list-tile-content>
                        <v-list-tile-title></v-list-tile-title>
                    </v-list-tile-content>

                </v-list-tile>

                <hr>
                <div v-if="role='admin'">

                    <v-list-tile
                            @click="editCompany"
                    >
                        <v-list-tile-action>
                            <v-icon>storage</v-icon>
                        </v-list-tile-action>
                        ویرایش سایت
                        <v-list-tile-content>
                            <v-list-tile-title></v-list-tile-title>
                        </v-list-tile-content>

                    </v-list-tile>

                    <v-list-tile
                            @click="companyUsers"
                    >
                        <v-list-tile-action>
                            <v-icon>people</v-icon>
                        </v-list-tile-action>
                        کاربران
                        <v-list-tile-content>
                            <v-list-tile-title></v-list-tile-title>
                        </v-list-tile-content>

                    </v-list-tile>

                    <hr>
                </div>
                <div v-for="jobPost in lastFiveJobPosts"
                >

                    <v-list-tile
                            @click="$router.push('/job_board/'+jobPost.id)"
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
    import { mapGetters } from 'vuex'
    export default {
        name: "userHeader",
        data() {
            return {
                drawer: null,
                company_id: '',
                companyName: '',
                newCompany: '',
                set: '',
                step: 1,
                jobPosts: null,

            }
        },
        computed:{
            ...mapGetters(['lastFiveJobPosts','userInfo'])
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
            logOut() {
                this.$store.dispatch('logOut')
                    .then(response => {
                        this.$router.push('/introduction')
                    })
            },
            editCompany(){
                this.$router.push('/user/company/edit')
            },
            companyUsers(){
                this.$router.push('/user/company/users')
            },
        },
        created() {
            this.$store.dispatch('getLastFiveJobPosts');
        },

    }
</script>

<style scoped>

</style>
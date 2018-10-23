<template>
    <v-layout
            wrap
    >
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
                        <router-link class="v-list__tile v-list__tile--link" :to="{name:'editProfile'}">
                            <v-list-tile-title>
                                <h5>
                                    <v-icon>edit</v-icon>
                                    {{userInfo.name}}
                                </h5>
                            </v-list-tile-title>
                        </router-link>
                        <v-list-tile-title>{{userInfo.position}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

            </v-list>
            <v-list class="pt-0" dense>
                <v-divider></v-divider>
                <v-list-tile>
                    <v-list-tile-action>
                        <v-icon>assignment</v-icon>
                    </v-list-tile-action>
                    <router-link :to="{name:'newPost'}" class="v-list__tile v-list__tile--link">درج آگهی</router-link>

                    <v-list-tile-content>
                        <v-list-tile-title></v-list-tile-title>
                    </v-list-tile-content>

                </v-list-tile>

                <v-list-tile>
                    <v-list-tile-action>
                        <v-icon>stop_screen_share</v-icon>
                    </v-list-tile-action>
                    <router-link :to="{name:'waitingPosts'}" class="v-list__tile v-list__tile--link">آگهی های در انتظار
                        تایید
                    </router-link>
                    <v-list-tile-content>
                        <v-list-tile-title></v-list-tile-title>
                    </v-list-tile-content>

                </v-list-tile>

                <v-list-tile>
                    <v-list-tile-action>
                        <v-icon>screen_share</v-icon>
                    </v-list-tile-action>
                    <router-link :to="{name:'livePosts'}" class="v-list__tile v-list__tile--link"> آگهی های در حال
                        انتشار
                    </router-link>
                    <v-list-tile-content>
                        <v-list-tile-title></v-list-tile-title>
                    </v-list-tile-content>

                </v-list-tile>


                <v-list-tile>
                    <v-list-tile-action>
                        <v-icon>update</v-icon>
                    </v-list-tile-action>
                    <router-link :to="{name:'expiredPosts'}" class="v-list__tile v-list__tile--link">آگهی های منقضی
                        شده
                    </router-link>
                    <v-list-tile-content>
                        <v-list-tile-title></v-list-tile-title>
                    </v-list-tile-content>

                </v-list-tile>
                <v-list-tile
                        @click="logOut">
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

                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon>storage</v-icon>
                        </v-list-tile-action>
                        <router-link :to="{name:'editCompany'}" class="v-list__tile v-list__tile--link"> ویرایش سایت
                        </router-link>
                        <v-list-tile-content>
                            <v-list-tile-title></v-list-tile-title>
                        </v-list-tile-content>

                    </v-list-tile>

                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon>people</v-icon>
                        </v-list-tile-action>
                        <router-link :to="{name:'companyUsers'}" class="v-list__tile v-list__tile--link">کاربران
                        </router-link>

                        <v-list-tile-content>
                            <v-list-tile-title></v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>

                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon>event</v-icon>
                        </v-list-tile-action>
                        <router-link :to="{name:'events'}" class="v-list__tile v-list__tile--link">رویدادها
                        </router-link>

                        <v-list-tile-content>
                            <v-list-tile-title></v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>

                    <hr>
                </div>
                <div v-for="jobPost in lastFiveJobPosts"
                >

                    <v-list-tile
                    >
                        <v-list-tile-action>
                            <v-icon>event_note</v-icon>
                        </v-list-tile-action>
                        <router-link :to="'/job_board/'+jobPost.id" class="v-list__tile v-list__tile--link">
                            {{jobPost.title}}
                        </router-link>
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
    import {mapGetters} from 'vuex'

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
        computed: {
            ...mapGetters(['lastFiveJobPosts', 'userInfo'])
        },
        methods: {
            logOut() {
                this.$store.dispatch('logOut')
                    .then(response => {
                        this.$router.push('/introduction')
                    })
            },
        },
        created() {
            this.$store.dispatch('getLastFiveJobPosts');
        },

    }
</script>

<style scoped>
    a {
        text-decoration: none
    }
</style>
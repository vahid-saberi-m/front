<template>
    <v-layout
            wrap
            style="height: 200px;"
    >
        <v-container>
            <v-layout justify-center>
                <v-toolbar>
                    <v-toolbar-side-icon
                            @click.stop="drawer = !drawer"
                    ></v-toolbar-side-icon>
                </v-toolbar>
            </v-layout>
        </v-container>


        <v-navigation-drawer
                v-model="drawer"
                absolute
                temporary
        >
            <v-list class="pa-1">
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <img :src="image">
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                        <v-list-tile-title>{{name}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

            </v-list>

            <v-list class="pt-0" dense>
                <v-divider></v-divider>

                <v-list-tile
                        @click=""
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
                        @click=""
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
                        @click=""
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
                        @click=""
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

                Name: '',
                company_size: '',
                slogan: '',
                website: '',
                logo: '',
                message_title: '',
                message_content: '',
                main_photo: '',
                about_us: '',
                why_us: '',
                recruiting_steps: '',
                address: '',
                Email: '',
                phone_number: '',
                location: '',
            }
        }
    }
</script>

<style scoped>

</style>
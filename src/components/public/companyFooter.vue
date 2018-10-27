<template>
    <v-footer
            height="auto"
            color="primary lighten-1"
    >
        <v-layout
                justify-center
                row
                wrap
        >
            <v-btn
                    color="white"
                    flat
                    round
            >
                خانه
            </v-btn>
            <v-btn
                    color="white"
                    flat
                    round
            >
                درباره ما
            </v-btn>
            <v-btn
                    color="white"
                    flat
                    round
            >
                آگهی های شغل
            </v-btn>
            <v-btn
                    color="white"
                    flat
                    round
            >
                رویدادها
            </v-btn>
            <v-flex
                    primary
                    lighten-2
                    py-3
                    text-xs-center
                    white--text
                    xs12
            >
                &copy;2018 — <strong>بالاتر</strong>
            </v-flex>
        </v-layout>
    </v-footer>
</template>

<script>
    export default {
        name: "companyFooter"
    }
</script>

<style scoped>

</style>
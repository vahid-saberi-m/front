<template>
    <div>
        <!--<pdf v-for="i in numPages"-->
             <!--:key="i"-->
             <!--:src="address"-->
             <!--:page="i"-->
             <!--@progress=""-->
        <!--/>-->
        <div style="width: 100%">
            <div v-if="loadedRatio > 0 && loadedRatio < 1"
                 style="background-color: green; color: white; text-align: center"
                 :style="{ width: loadedRatio * 100 + '%' }">{{ Math.floor(loadedRatio * 100) }}%</div>
            <pdf v-if="show" ref="pdf"
                 style="border: 1px solid black"
                 :src="src" :page="page"
                 @progress="loadedRatio = $event"
                 @error="error"
                 @num-pages="numPages = $event"
                 @link-clicked="page = $event"></pdf>
        </div>
    </div>
</template>

<script>

    import pdf from 'vue-pdf'

    export default {
        props: ['address'],
        name: "cvPdfViewer",
        components: {
            pdf
        },
        data() {
            return {
                show: true,
                src: pdf.createLoadingTask(this.address),
                numPages: undefined,
                loadedRatio: 0,
                page:1
            }
        },
        created() {
            this.src.then(pdf => {

                this.numPages = pdf.numPages;
            });
        },
        methods:{
            error: function(err) {

                console.log(err);
            }
        }
    }
</script>

<style scoped>

</style>
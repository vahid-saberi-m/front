<template>
  <div>
    <div style="
        width: 50vw;
        height: 60vh;
        margin: 2rem;
        border: 1px solid black;
        overflow-x: hidden;
        ">

      <pdf v-if="show" ref="pdf"
           style="overflow-y: auto;"
           :src="src" :page="page"
           @progress="1"
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
                page: 1
            }
        },
        created() {
            this.src.then(pdf => {

                this.numPages = pdf.numPages;
            });
        },
        methods: {
            error: function (err) {

                console.log(err);
            }
        }
    }
</script>

<style scoped>

</style>

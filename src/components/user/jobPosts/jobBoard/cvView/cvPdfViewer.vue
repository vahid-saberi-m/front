<template>
    <!--<pdf src="http://api.balatar.inpin.co//storage/candidate/cvs/avatar.pdf"></pdf>-->
</template>

<script>
    import pdf from 'vue-pdf'
    export default {
        props:['address'],
        name: "cvPdfViewer",
        components: {
            pdf
        }
    }
</script>

<style scoped>

</style>
<template>
    <pdf :src="address"></pdf>
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
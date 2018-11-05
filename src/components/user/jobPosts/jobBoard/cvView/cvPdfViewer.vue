<template>
    <pdf :src="address"  />
</template>

<script>

    import pdf from 'vue-pdf'
    export default {
        props:['address'],
        name: "cvPdfViewer",
        components: {
            pdf
        },
        created(){
            console.log('address '+this.address)
        }
    }
</script>

<style scoped>

</style>
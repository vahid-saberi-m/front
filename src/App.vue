<template>
  <div id="app" >
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <router-view :key="$route.fullPath">

    </router-view>
    <loader></loader>
  </div>

</template>


<script>

  import Loader from "./components/loader";
  export default {
  name: 'app',
    components:{
        Loader


    },
      // watch:{
      //     '$route' (to, from){
      //         alert(this.$route.params.id);
      //         this.$router.push({name: 'company', params: this.$route.params.id})
      //     }
      // },
}
</script>

<style>
#app {
  font-family: 'iransans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  }
@font-face{
  font-family: iransans;
  src: url("./assets/fonts/irsans.ttf");
}
  body{
    font-size: 12px;
  }


</style>

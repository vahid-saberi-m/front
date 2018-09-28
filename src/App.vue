<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>

  export default {
  name: 'app',
    components:{
    }
}
</script>

<style>
#app {
  font-family: 'iransans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
@font-face{
  font-family: iransans;
  src: url("./assets/fonts/irsans.ttf");
}


</style>

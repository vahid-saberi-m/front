import '@babel/polyfill'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import './plugins/vuetify'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import {store} from "./store/store";
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { sync } from 'vuex-router-sync'
import VuexPersistence from 'vuex-persist'



// sync(store, router, {moduleName: 'RouterModule'});
Vue.use(axios);
Vue.use(Vuetify, {rtl: true});
Vue.use(store);
const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
});

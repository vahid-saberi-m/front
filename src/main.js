// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import {store} from "./store/store";


Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(axios);
Vue.use(store);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    // render: h => h(App),
    components: {App},
    template: '<App/>'
});

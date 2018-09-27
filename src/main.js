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
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(axios);
Vue.use(store);

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!store.getters.loggedIn) {
            next({
                path: '/introduction',
            })
        } else {
            next()
        }
    } else {
        next() // make sure to always call next()!
    }
});
new Vue({
    el: '#app',
    router,
    store,
    // render: h => h(App),
    components: {App},
    template: '<App/>'
});

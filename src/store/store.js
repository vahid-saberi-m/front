import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);
axios.defaults.baseURL='http://api.balatar.inpin.co/';
export const store = new Vuex.Store({
   state:{

       token:localStorage.getItem('access_token')||null,
       Accept: 'application/json'

   },
    getters:{

    },
    mutations:{

    },
    actions:{

        retrieveToken(context,credentials){
          axios.post('/login',{
              username: credentials.username,
              password: credentials.password
          }).then(response =>{
              console.log(response)
          })
        },

    }
});
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import SideBar from './components/SideBar.vue';
import NavBar from './components/NavBar.vue';

import HighchartsVue from 'highcharts-vue'

import VueAxios from 'vue-axios';
import axios from 'axios';

import * as VueGoogleMaps from 'vue2-google-maps'

import datetime from 'node-datetime';

Vue.use(VueAxios, axios);

Vue.use(HighchartsVue);

Vue.use(datetime);

import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin);

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAOru3PxBAjUa_W0td3eoNYeobrsx6Llds',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
 
    //// If you want to set the version, you can do so:
  },
});

Vue.config.productionTip = false;

Vue.component('sidebar', SideBar);
Vue.component('navbar', NavBar);

Vue.prototype.$eventBus = new Vue();

/* eslint-disable */

const app  = new Vue({
  router,
  render: h => h(App)
}).$mount("#app");


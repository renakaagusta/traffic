import Vue from "vue";
import VueRouter from "vue-router";

import Home from './../views/Home.vue';
import Street from './../views/Street.vue';
import Timeline from './../views/Timeline.vue';

Vue.use(VueRouter);

const routes = [
  {
    name: 'home',
    path: '/',
    alias: '/home',
    component: Home
  },
  {
      name: 'timeline',
      path: '/timeline',
      component: Timeline
  },
  {
      name: 'street',
      path: '/street:streetName',
      component: Street
  },
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

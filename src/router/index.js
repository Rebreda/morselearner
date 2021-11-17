import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from '../pages/HomePage.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  }
];

const router = new VueRouter({
  base: process.env.VUE_APP_BASE_PATH,
  routes,
  linkExactActiveClass: "is-active",
});

export default router;
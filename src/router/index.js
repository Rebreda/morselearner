import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from '../pages/HomePage.vue'
import ReviewPage from '../pages/ReviewPage.vue'
import ChallengePage from '../pages/ChallengePage.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/review",
    name: "ReviewPage",
    component: ReviewPage,
  },
  {
    path: "/challenge",
    name: "ChallengePage",
    component: ChallengePage,
  }
];

const router = new VueRouter({
  base: process.env.VUE_APP_BASE_PATH,
  routes,
  linkExactActiveClass: "is-active",
});

export default router;
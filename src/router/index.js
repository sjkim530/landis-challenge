import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Analytics from "../views/Analytics.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/accounts",
    name: "Accounts",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Accounts.vue"),
  },
  {
    path: "/analytics",
    name: "Analytics",
    component: Analytics,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

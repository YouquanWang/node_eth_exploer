import { createRouter, createWebHashHistory } from "vue-router";
import Index from "../views/index";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;

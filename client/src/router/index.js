import { createRouter, createWebHashHistory } from "vue-router";
import Index from "../views/index";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/block",
    name: "Block",
    component: () =>
      import(/* webpackChunkName: "Block" */ "../views/block")
  },
  {
    path: "/transaction",
    name: "Transaction",
    component: () =>
      import(/* webpackChunkName: "Transaction" */ "../views/transaction")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;

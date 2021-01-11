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
    path: "/block/detial/:blockNumber",
    name: "BlockDetial",
    component: () =>
      import(/* webpackChunkName: "BlockDetial" */ "../views/block/detial")
  },
  {
    path: "/transaction",
    name: "Transaction",
    component: () =>
      import(/* webpackChunkName: "Transaction" */ "../views/transaction")
  },
  {
    path: "/transaction/detial/:hash",
    name: "TransactionDetial",
    component: () =>
      import(/* webpackChunkName: "TransactionDetial" */ "../views/transaction/detial")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;

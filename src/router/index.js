import Vue from "vue";
import VueRouter from "vue-router";
import contextRouter from "./routerHandler";
import { axiosCancelArr } from "@/api/http";
Vue.use(VueRouter);
const routes = [...contextRouter];
const router = new VueRouter({ routes });
router.beforeEach((to, from, next) => {
  axiosCancelArr.forEach((i, index) => {
    console.log(i.url, i.method);
    i.cancel();
    delete axiosCancelArr[index];
  });

  next();
});
router.afterEach(() => {});
export default router;

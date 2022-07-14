import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import UsersView from "@/views/UsersView.vue";
import RolesView from "@/views/RolesView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: UsersView,
  },
  {
    path: "/roles",
    name: "roles",
    component: RolesView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

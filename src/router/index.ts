import { createRouter, createWebHistory } from "vue-router";
import DraftsView from "../views/DraftsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "drafts",
      component: DraftsView,
    },
    {
      path: "/timestamps",
      name: "timestamps",
      component: () => import("../views/TimestampsView.vue"),
    },
    {
      path: "/reports",
      name: "reports",
      component: () => import("../views/ReportsView.vue"),
    },
    {
      path: "/tasks",
      name: "tasks",
      component: () => import("../views/TasksView.vue"),
    },
  ],
});

export default router;

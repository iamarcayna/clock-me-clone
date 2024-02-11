import { createRouter, createWebHistory } from "vue-router";
import ReportView from "../views/ReportsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "reports",
      component: ReportView,
    },
    {
      path: "/timelines",
      name: "timelines",
      component: () => import("../views/TimelinesView.vue"),
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("../views/ProjectsView.vue"),
    },
    {
      path: "/members",
      name: "members",
      component: () => import("../views/MembersView.vue"),
    },
  ],
});

export default router;

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    redirect: "about-me",
    children: [
      {
        path: "about-me",
        name: "about-me",
        meta: {
          title: "About Me",
        },
        component: () => import("../views/AboutMeView.vue"),
      },
      {
        path: "contact-me",
        name: "contact-me",
        meta: {
          title: "Contact Me",
        },
        component: () => import("../views/ContactMeView.vue"),
      },
      {
        path: "project",
        name: "project",
        meta: {
          title: "project",
        },
        children: [
          {
            path: "neurotechnology-and-programming",
            name: "neurotechnology-and-programming",
            meta: {
              html: "https://api.github.com/repos/spbgzh/Neurotechnology-And-Programming-Courses/readme",
              count: 22,
            },
            component: () => import("../views/ProjectView.vue"),
          },
          {
            path: "ai-system",
            name: "ai-system",
            meta: {
              html: "https://api.github.com/repos/spbgzh/artificial-intelligence-system/readme",
              count: 20,
            },
            component: () => import("../views/ProjectView.vue"),
          },
          {
            path: "leanring-neural-network",
            name: "leanring-neural-network",
            meta: {
              html: "https://api.github.com/repos/spbgzh/LearningNeuralNetworks/readme",
              count: 22,
            },
            component: () =>
              import("../views/ProjectView.vue"),
          },
          {
            path: "graph-theory",
            name: "graph-theory",
            meta: {
              html: "https://api.github.com/repos/spbgzh/graph-theory-algorithm/readme",
              count: 22,
            },
          
            component: () => import("../views/ProjectView.vue"),
          },
          {
            path: "emotion-recognition",
            name: "emotion-recognition",
            meta: {
              html: "https://api.github.com/repos/DenisAndGzh/emotion-recognition/readme",
              count: 20,
            },
            component: () =>
              import("../views/ProjectView.vue"),
          },
          {
            path: "chatex",
            name: "chatex",
            meta: {
              html: "https://api.github.com/repos/spbgzh/chatex/readme",
              count: 20,
            },
            component: () => import("../views/ProjectView.vue"),
          },
          {
            path: "adopt-animal",
            name: "adopt-animal",
            meta: {
              html: "https://api.github.com/repos/DenisAndGzh/adoptanimal/readme",
              count: 20,
            },
            component: () => import("../views/ProjectView.vue"),
          },
          {
            path: "bluetooth-car",
            name: "bluetooth-car",
            meta: {
              html: "https://api.github.com/repos/spbgzh/BluetoothCar/readme",
              count: 20,
            },
            component: () => import("../views/ProjectView.vue"),
          },
          {
            path: "ai-gobang",
            name: "ai-gobang",
            meta: {
              html: "https://api.github.com/repos/spbgzh/AI-GoBang/readme",
              count: 20,
            },
            component: () => import("../views/ProjectView.vue"),
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

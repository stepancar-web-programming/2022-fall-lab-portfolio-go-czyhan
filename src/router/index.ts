import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: "about-me",
    children: [
      {
        path: 'about-me',
        name: 'about-me',
        meta: {
          title: 'About Me'
        },
        component: () => import('../views/AboutMeView.vue')
      },
      {
        path: 'contact-me',
        name: 'contact-me',
        meta: {
          title: 'Contact Me'
        },
        component: () => import('../views/ContactMeView.vue')
      },
      {
        path: 'project',
        name: 'project',
        meta: {
          title: 'project'
        },
        children: [
          {
            path: 'neurotechnology-and-programming',
            name: 'neurotechnology-and-programming',
            component: () => import('../views/project/NeurotechnologyView.vue')
          },
          {
            path: 'ai-system',
            name: 'ai-system',
            component: () => import('../views/project/AISystemView.vue')
          },
          {
            path: 'leanring-neural-network',
            name: 'leanring-neural-network',
            component: () => import('../views/project/LeanringNeuralNetworkView.vue')
          },
          {
            path: 'graph-theory',
            name: 'graph-theory',
            component: () => import('../views/project/GraphTheoryView.vue')
          },
          {
            path: 'emotion-recognition',
            name: 'emotion-recognition',
            component: () => import('../views/project/EmotionRecognitionlNetworkView.vue')
          },
          {
            path: 'chatex',
            name: 'chatex',
            component: () => import('../views/project/ChatexView.vue')
          },
          {
            path: 'adopt-animal',
            name: 'adopt-animal',
            component: () => import('../views/project/AdoptAnimalView.vue')
          },
          {
            path: 'bluetooth-car',
            name: 'bluetooth-car',
            component: () => import('../views/project/BluetoothCar.vue')
          },
          {
            path: 'ai-gobang',
            name: 'ai-gobang',
            component: () => import('../views/project/AIGobangView.vue')
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

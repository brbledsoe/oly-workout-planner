import { createRouter, createWebHistory } from 'vue-router'

import ModelView from '@/views/ModelView.vue'
import PlannerView from '@/views/PlannerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'planner',
      component: PlannerView,
    },
    {
      path: '/model',
      name: 'model',
      component: ModelView,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router

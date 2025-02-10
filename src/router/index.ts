import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/testing',
      name: 'testing',
      component: () => import('../views/TestingView.vue'),
    },
    {
      path: '/accessibility',
      name: 'accessibility',
      component: () => import('../views/AccessibilityView.vue'),
    },
    {
      path: '/security',
      name: 'security',
      component: () => import('../views/SecurityView.vue'),
    },
    {
      path: '/advanced-js',
      name: 'advanced-js',
      component: () => import('../views/AdvancedJsView.vue'),
    },
    {
      path: '/advanced-css',
      name: 'advanced-css',
      component: () => import('../views/AdvancedCssView.vue'),
    },
  ],
})

export default router

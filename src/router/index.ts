import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { loadLayoutMiddleware } from '@/router/middleware/loadLayoutMiddleware'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        layout: 'AppLayoutDefault',
      },
    },
    {
      path: '/testing',
      meta: {
        layout: 'AppLayoutDefault',
      },
      name: 'testing',
      component: () => import('../views/TestingView.vue'),
    },
    {
      path: '/accessibility',
      meta: {
        layout: 'AppLayoutDefault',
      },
      name: 'accessibility',
      component: () => import('../views/AccessibilityView.vue'),
    },
    {
      path: '/security',
      meta: {
        layout: 'AppLayoutDefault',
      },
      name: 'security',
      component: () => import('../views/SecurityView.vue'),
    },
    {
      path: '/advanced-js',
      meta: {
        layout: 'AppLayoutDefault',
      },
      name: 'advanced-js',
      component: () => import('../views/AdvancedJsView.vue'),
    },
    {
      path: '/advanced-css',
      meta: {
        layout: 'AppLayoutDefault',
      },
      name: 'advanced-css',
      component: () => import('../views/AdvancedCssView.vue'),
    },
  ],
})

// Before each route changing the loadLayoutMiddleware middleware is executing.
router.beforeEach(loadLayoutMiddleware)

export default router

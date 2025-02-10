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
        title: 'Home Page',
        layout: 'AppLayoutDefault',
      },
    },
    {
      path: '/testing',
      meta: {
        title: 'Testing Page',
        layout: 'AppLayoutDefault',
      },
      name: 'testing',
      component: () => import('../views/TestingView.vue'),
    },
    {
      path: '/accessibility',
      meta: {
        title: 'Accessibility Page',
        layout: 'AppLayoutDefault',
      },
      name: 'accessibility',
      component: () => import('../views/AccessibilityView.vue'),
    },
    {
      path: '/security',
      meta: {
        title: 'Security Page',
        layout: 'AppLayoutDefault',
      },
      name: 'security',
      component: () => import('../views/SecurityView.vue'),
    },
    {
      path: '/advanced-js',
      meta: {
        title: 'Advanced JS Page',
        layout: 'AppLayoutDefault',
      },
      name: 'advanced-js',
      component: () => import('../views/AdvancedJsView.vue'),
    },
    {
      path: '/advanced-css',
      meta: {
        title: 'Advanced CSS Page',
        layout: 'AppLayoutDefault',
      },
      name: 'advanced-css',
      component: () => import('../views/AdvancedCssView.vue'),
    },
  ],
})

// Before each route changing the loadLayoutMiddleware middleware is executing.
router.beforeEach((to, from, next) => {
  // Set the document title based on the route meta
  document.title = `${to.meta.title} | Web Dev Lab`

  // Execute the loadLayoutMiddleware middleware
  loadLayoutMiddleware(to, from, next)
})

export default router

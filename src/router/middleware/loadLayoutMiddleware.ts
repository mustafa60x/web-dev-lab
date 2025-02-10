import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export async function loadLayoutMiddleware(
  route: RouteLocationNormalized,
  _: RouteLocationNormalized,
  next: NavigationGuardNext,
) {
  try {
    // Only proceed if layout is specified
    if (route.meta?.layout) {
      const layout = route.meta.layout as string
      const layoutComponent = await import(`@/layouts/${layout}.vue`)
      // Set the layout component in the route's meta
      route.meta.layoutComponent = layoutComponent.default
    }
  } catch (e) {
    console.error('Error occurred in processing of layouts: ', e)
  }

  // Always call next() to continue navigation
  return next()
}

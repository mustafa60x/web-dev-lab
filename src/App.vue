<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'

defineOptions({
  name: 'App',
})

const route = useRoute()
const layout = computed(() => {
  // Default layout if no layout is specified
  if (!route.meta?.layout) return 'div'
  return route.meta.layoutComponent || 'div'
})
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<script setup lang="ts">
defineOptions({
  name: 'TestingView',
})

import IndexPage from '@/modules/Testing/IndexPage.vue'
</script>

<template>
  <IndexPage />
</template>

<style scoped>
.testing {
  padding: 2rem;
}

.content {
  margin-top: 1rem;
}
</style>

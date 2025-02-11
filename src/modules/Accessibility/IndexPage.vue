<template>
  <div class="accessibility">
    <h1>Accessibility Page</h1>
    <div class="content">
      <p>
        Welcome to the Accessibility section. Here you'll find resources and examples about web
        accessibility.
      </p>
    </div>

    <hr class="mt-4" />

    <div>
      <AccessibilityExamples />
    </div>
  </div>
</template>

<script setup lang="ts">
import AccessibilityExamples from '@/modules/Accessibility/AccessibilityExamples.vue'
</script>

<style scoped>
.accessibility {
  padding: 2rem;
}

.content {
  margin-top: 1rem;
}
</style>

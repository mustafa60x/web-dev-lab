<template>
  <div class="testing">
    <h1>Testing Page</h1>
    <div class="content">
      <p>
        Welcome to the Testing section. Here you'll find resources and examples about software
        testing.
      </p>
    </div>

    <TestForm />

    <hr class="my-10" />

    <TestCounter />
  </div>
</template>

<script setup lang="ts">
import TestForm from '@/components/Test/TestForm.vue'
import TestCounter from '@/components/Test/TestCounter.vue'
</script>

<style scoped>
.testing {
  padding: 2rem;
}

.content {
  margin-top: 1rem;
}
</style>

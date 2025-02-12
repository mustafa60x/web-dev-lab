<template>
  <div>
    <h4 class="text-gray-600">JS Motoru & Optimizasyon</h4>
    <br />
    <button @click="measurePerformance">Performans Ölç (1 milyon veri)</button>
    <br />
    <br />
    <p>{{ performanceResult }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const performanceResult = ref('')

function measurePerformance() {
  const start = performance.now()

  let sum = 0
  for (let i = 0; i < 1_000_000; i++) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    sum += i
  }

  const end = performance.now()
  performanceResult.value = `Döngü Süresi: ${(end - start).toFixed(2)} ms`
}
</script>

<style scoped>
button {
  background-color: #17a2b8;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  margin: 5px;
}
</style>

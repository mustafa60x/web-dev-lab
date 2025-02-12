<template>
  <div>
    <h4 class="text-gray-600">Scope & Closures</h4>
    <br />
    <button @click="increment">Arttır</button>
    <br />
    <br />
    <p>Sayac: {{ counter }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
function createCounter() {
  let count = 0
  return function () {
    count++
    return count
  }
}
const counterFn = createCounter()
const counter = ref(0)

function increment() {
  counter.value = counterFn()
}
</script>

<style scoped>
button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 5px;
}
</style>

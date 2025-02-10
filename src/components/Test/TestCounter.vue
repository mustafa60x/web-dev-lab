<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const increment = () => count.value++
const decrement = () => count.value--
</script>

<template>
  <div>
    <p data-test="count">{{ count }}</p>
    <div class="flex gap-4 justify-center">
      <button @click="increment" data-test="increment" class="success">Increment</button>
      <button @click="decrement" data-test="decrement" class="danger">Decrement</button>
    </div>
  </div>
</template>

<style scoped>
div {
  text-align: center;
}

button {
  margin-top: 1rem;
  width: 100px;
  height: 30px;
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
}

button.success {
  background-color: #4caf50;
}

button.danger {
  background-color: #f44336;
}
</style>

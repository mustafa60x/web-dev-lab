<template>
  <div class="flex flex-col items-center justify-center">
    <h4 class="text-gray-600">ES6+ Özellikleri</h4>
    <br />
    <button @click="showFeatures">Özellikleri Göster (2s bekleyin)</button>
    <br />
    <br />
    <p>{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const message = ref('')

function showFeatures() {
  // Destructuring
  const person = { name: 'Ali', age: 25 }
  const { name, age } = person

  // Promises & Async/Await
  function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => resolve('Veri getirildi!'), 2000)
    })
  }

  async function displayData() {
    const data = await fetchData()
    message.value = `Ad: ${name}, Yaş: ${age} - ${data}`
  }

  displayData()
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

<template>
  <div>
    <h4 class="text-gray-600">Bellek Yönetimi & Event Loop</h4>
    <br />
    <button @click="simulateMemoryUsage">Bellek Kullanımını Simüle Et (1 milyon veri)</button>
    <br />
    <br />
    <p>{{ memoryMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const memoryMessage = ref('')

function simulateMemoryUsage() {
  let data: { index: number; value: number }[] | null = []
  for (let i = 0; i < 1000000; i++) {
    data.push({ index: i, value: Math.random() })
  }

  setTimeout(() => {
    data = null // Belleği serbest bırak
    memoryMessage.value = 'Bellek temizlendi!'
  }, 3000)

  memoryMessage.value = 'Bellek tüketiliyor...'
}
</script>

<style scoped>
button {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 5px;
}
</style>

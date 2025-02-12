<template>
  <div>
    <h4 class="text-gray-600">this & Object Prototypes</h4>
    <br />
    <button @click="showPersonInfo">Bilgileri Göster</button>
    <br />
    <br />
    <p>{{ personInfo }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  getInfo(): string {
    return `Ad: ${this.name}, Yaş: ${this.age}`
  }
}

const person = new Person('Ahmet', 30)
const personInfo = ref('')

function showPersonInfo() {
  personInfo.value = person.getInfo()
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

pre {
  background: #f4f4f4;
  padding: 10px;
  border-radius: 5px;
  overflow-x: auto;
}
code {
  font-family: 'Courier New', monospace;
}
</style>

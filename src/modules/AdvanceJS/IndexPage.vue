<script setup lang="ts">
import ScopeClosures from './Tutorials/ScopeClosures.vue'
import ThisPrototypes from './Tutorials/ThisPrototypes.vue'
import Es6Features from './Tutorials/Es6Features.vue'
import MemoryEventLoop from './Tutorials/MemoryEventLoop.vue'
import FunctionalProgramming from './Tutorials/FunctionalProgramming.vue'
import JsEngineOptimization from './Tutorials/JsEngineOptimization.vue'

const components = {
  ScopeClosures,
  ThisPrototypes,
  Es6Features,
  MemoryEventLoop,
  FunctionalProgramming,
  JsEngineOptimization,
}

import { shallowRef } from 'vue'

const currentComponent = shallowRef(ScopeClosures)
</script>

<template>
  <div class="advanced-js">
    <h1>Advanced JavaScript Page</h1>
    <div class="content">
      <p>
        Welcome to the Advanced JavaScript section. Here you'll find resources and examples about
        advanced JS concepts.
      </p>
    </div>

    <hr />

    <div class="container">
      <nav class="mb-4">
        <button @click="currentComponent = components.ScopeClosures">Scope & Closures</button>
        <button @click="currentComponent = components.ThisPrototypes">this & Prototypes</button>
        <button @click="currentComponent = components.Es6Features">ES6+ Özellikleri</button>
        <button @click="currentComponent = components.MemoryEventLoop">Bellek & Event Loop</button>
        <button @click="currentComponent = components.FunctionalProgramming">
          Fonksiyonel Programlama
        </button>
        <button @click="currentComponent = components.JsEngineOptimization">
          JS Motoru & Optimizasyon
        </button>
      </nav>
      <component :is="currentComponent" />
    </div>
  </div>
</template>

<style scoped>
.advanced-js {
  padding: 2rem;
}

.content {
  margin-top: 1rem;
}

.container {
  text-align: center;
  padding: 20px;
}
nav button {
  margin: 5px;
  padding: 10px;
  cursor: pointer;
  border: none;
  background-color: #42b983;
  color: white;
  border-radius: 5px;
}
</style>

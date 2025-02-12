<template>
  <div>
    <h4 class="text-gray-600">Fonksiyonel Programlama</h4>
    <br />
    <button @click="runCurryingExample">Currying Örneği</button>
    <button @click="runMemoizationExample">Memoization Örneği</button>
    <p>{{ resultMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const resultMessage = ref('')

// Currying örneği
function curry<A, B, C>(fn: (a: A, b: B) => C): (a: A) => (b: B) => C {
  return function (a: A) {
    return function (b: B) {
      return fn(a, b)
    }
  }
}

// another example for currying
/* const curry =
  (fn) =>
  (...args) =>
    args.length >= fn.length ? fn(...args) : (...next) => curry(fn)(...args, ...next)

const add = (a, b, c) => a + b + c

const curriedAdd = curry(add)

console.log(curriedAdd(2)(3)(5)) // 10 */

const add = (x: number, y: number) => x + y
const curriedAdd = curry(add)

function runCurryingExample() {
  resultMessage.value = `5 + 3 = ${curriedAdd(5)(3)}`
}

// Memoization örneği - onbellekleme
function memoize(fn: (x: number) => number) {
  const cache = {} as { [key: number]: number }
  return function (x: number) {
    if (cache[x]) {
      console.log('Bellekten alındı!')
      return cache[x]
    } else {
      console.log('Bellek tüketiliyor...')
      const result = fn(x)
      cache[x] = result
      return result
    }
  }
}
const square = memoize((x) => x * x)

function runMemoizationExample() {
  resultMessage.value = `4^2 = ${square(4)}, tekrar çağrıldığında: ${square(4)}`
}
</script>

<style scoped>
button {
  background-color: #ffc107;
  color: black;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 5px;
  margin: 5px;
}
</style>

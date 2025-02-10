import { setActivePinia, createPinia } from 'pinia'
import { useCounterStore } from '@/stores/counter'
import { describe, beforeEach, it, expect } from 'vitest'

describe('Counter Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('increments the count', () => {
    const store = useCounterStore()
    store.increment()
    expect(store.count).toBe(1)
  })
})

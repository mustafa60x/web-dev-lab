import { mount } from '@vue/test-utils'
import Counter from '../../components/Test/TestCounter.vue'
import { describe, it, expect } from 'vitest'

describe('Counter.vue', () => {
  it('başlangıç değeri sıfırdır', () => {
    const wrapper = mount(Counter)
    expect(wrapper.find("[data-test='count']").text()).toBe('0')
  })

  it('increment butonuna basınca sayıyı artırır', async () => {
    const wrapper = mount(Counter)
    await wrapper.find('[data-test="increment"]').trigger('click')
    expect(wrapper.find("[data-test='count']").text()).toBe('1')
  })

  it('decrement butonuna basınca sayıyı azaltır', async () => {
    const wrapper = mount(Counter)
    await wrapper.find('[data-test="decrement"]').trigger('click')
    expect(wrapper.find("[data-test='count']").text()).toBe('-1')
  })
})

import { mount } from '@vue/test-utils'
import Counter from '../../components/Test/TestCounter.vue'
import { describe, it, expect } from 'vitest'

describe('Counter.vue', () => {
  it('başlangıç değeri sıfırdır', () => {
    const wrapper = mount(Counter)
    expect(wrapper.find("[data-test='count']").text()).toBe('0')
  })

  it('butona basınca sayıyı artırır', async () => {
    const wrapper = mount(Counter)
    await wrapper.find('button').trigger('click')
    expect(wrapper.find("[data-test='count']").text()).toBe('1')
  })
})

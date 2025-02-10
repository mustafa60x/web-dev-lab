import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Test from '../Test/TestComponent.vue'

describe('TestComponent', () => {
  it('renders properly', () => {
    const wrapper = mount(Test, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})

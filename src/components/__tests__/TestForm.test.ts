// Integration test
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TestForm from '../Test/TestForm.vue'

describe('TestForm', () => {
  it('renders form elements correctly', () => {
    const wrapper = mount(TestForm)

    expect(wrapper.find('[data-testid="contact-form"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="name-input"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="email-input"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="message-input"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="submit-button"]').exists()).toBe(true)
  })

  it('updates v-model values when inputs change', async () => {
    const wrapper = mount(TestForm)

    const nameInput = wrapper.find('[data-testid="name-input"]')
    const emailInput = wrapper.find('[data-testid="email-input"]')
    const messageInput = wrapper.find('[data-testid="message-input"]')

    await nameInput.setValue('John Doe')
    await emailInput.setValue('john@example.com')
    await messageInput.setValue('Test message')

    expect((nameInput.element as HTMLInputElement).value).toBe('John Doe')
    expect((emailInput.element as HTMLInputElement).value).toBe('john@example.com')
    expect((messageInput.element as HTMLTextAreaElement).value).toBe('Test message')
  })

  it('shows success message after form submission', async () => {
    const wrapper = mount(TestForm)

    // Fill the form
    await wrapper.find('[data-testid="name-input"]').setValue('John Doe')
    await wrapper.find('[data-testid="email-input"]').setValue('john@example.com')
    await wrapper.find('[data-testid="message-input"]').setValue('Test message')

    // Submit the form
    await wrapper.find('[data-testid="contact-form"]').trigger('submit')

    // Check if success message is displayed
    expect(wrapper.find('[data-testid="success-message"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="success-message"]').text()).toBe(
      'Form submitted successfully!',
    )
  })
})

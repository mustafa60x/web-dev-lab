import { test, expect } from '@playwright/test'

// See here how to get started:
// https://playwright.dev/docs/intro
test('visits the app root url', async ({ page }) => {
  await page.goto('/testing')
  await expect(page.locator('h1')).toHaveText('Testing Page')
})

test('renders form elements correctly', async ({ browser }) => {
  const page = await browser.newPage()
  await page.goto('/testing')
  await expect(page).toHaveTitle('Testing Page | Web Dev Lab')

  await expect(page.locator('[data-testid="form-title"]')).toHaveText('Contact Form')
  await expect(page.locator('[data-testid="name-input"]')).toBeVisible()
  await expect(page.locator('[data-testid="email-input"]')).toBeVisible()
  await expect(page.locator('[data-testid="message-input"]')).toBeVisible()
  await expect(page.locator('[data-testid="submit-button"]')).toBeVisible()
})

test('submits the form', async ({ browser }) => {
  const page = await browser.newPage()
  await page.goto('/testing')
  await expect(page).toHaveTitle('Testing Page | Web Dev Lab')

  await page.fill('[data-testid="name-input"]', 'Mustafa')
  await page.fill('[data-testid="email-input"]', 'mustafa60x@gmail.com')
  await page.fill('[data-testid="message-input"]', 'Hello, this is a test message.')

  await page.click('[data-testid="submit-button"]')

  // Check if success message is displayed
  await expect(page.locator('[data-testid="success-message"]')).toBeVisible()
  await expect(page.locator('[data-testid="success-message"]')).toHaveText(
    'Form submitted successfully!',
  )
})

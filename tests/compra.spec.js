import { test, expect } from '@playwright/test';
import { qase } from 'playwright-qase-reporter';

test(qase(1, 'Compra de producto'), async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  await page.click('[data-test="shopping-cart-link"]');

  await page.click('[data-test="checkout"]');

  await page.fill('[data-test="firstName"]', 'Mario');
  await page.fill('[data-test="lastName"]', 'Test');
  await page.fill('[data-test="postalCode"]', '64000');

  await page.click('[data-test="continue"]');
  await page.click('[data-test="finish"]');

  await expect(page.locator('[data-test="complete-header"]'))
  .toHaveText('Thank you for your order!');
});
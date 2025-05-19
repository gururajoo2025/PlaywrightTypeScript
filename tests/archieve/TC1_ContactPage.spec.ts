import { test, expect, Page } from '@playwright/test';

test('Contact Error Validation', async ({ page }: { page: Page }) => {
  await page.goto('https://jupiter.cloud.planittesting.com/#/');
  console.log(await page.title());
  await expect(page).toHaveTitle('Jupiter Toys');

  await page.locator('#nav-contact').click(); // Contact
  await page.locator('.btn-contact').click(); // Submit

  // Check for 'Forename is required' validation
  if ((await page.getByText('Forename is required', { exact: true }).count()) === 1) {
    await page.locator('#forename').fill('Gururaj');
    await page.locator('.btn-contact').click(); // Submit
  }

  await page.waitForTimeout(3000);

  await page.locator("input[id='surname']").fill('Rathnam');
  await page.locator('.btn-contact').click(); // Submit

  await page.waitForTimeout(3000);

  // Check for 'Email is required' validation
  if ((await page.getByText('Email is required', { exact: true }).count()) === 1) {
    await page.locator('#email').fill('Gururaj@gmail.com');
    await page.locator('.btn-contact').click(); // Submit
  }

  await page.waitForTimeout(3000);

  await page.locator('#telephone').fill('024789658325');
  // Submit
  await page.locator('.btn-contact').click(); 

  // Check for 'Message is required' validation
  if ((await page.getByText('Message is required', { exact: true }).count()) === 1) {
    await page.locator('#message').fill('Gururaj@gmail.com is testing it');
  }

  await page.waitForTimeout(3000);

  // Final submit
  await page.locator('.btn-contact').click(); 

  // Feedback confirmation
  console.log(await page.locator('.alert-success').textContent());
});
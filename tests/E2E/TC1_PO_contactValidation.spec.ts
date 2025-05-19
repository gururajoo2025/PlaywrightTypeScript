import { test, expect, Page } from '@playwright/test';
import { ContactPage } from '/PlaywrightDemo/pageObjects/contactPage'; // Adjust path as needed

test('Contact Error Validation', async ({ page }: { page: Page }) => {
  const contactPage = new ContactPage(page);

  await contactPage.navigate();
  await contactPage.goToContact();
  await contactPage.clickSubmit();

  if (await contactPage.isValidationMessageVisible('Forename is required')) {
    await contactPage.fillForename('Gururaj');
    await contactPage.clickSubmit();
  }

  await page.waitForTimeout(3000);

  await contactPage.fillSurname('Rathnam');
  await contactPage.clickSubmit();

  await page.waitForTimeout(3000);

  if (await contactPage.isValidationMessageVisible('Email is required')) {
    await contactPage.fillEmail('Gururaj@gmail.com');
    await contactPage.clickSubmit();
  }

  await page.waitForTimeout(3000);

  await contactPage.fillTelephone('024789658325');
  await contactPage.clickSubmit();

  if (await contactPage.isValidationMessageVisible('Message is required')) {
    await contactPage.fillMessage('Gururaj@gmail.com is testing it');
  }

  await page.waitForTimeout(3000);

  await contactPage.clickSubmit();

  console.log(await contactPage.getSuccessMessage());
});
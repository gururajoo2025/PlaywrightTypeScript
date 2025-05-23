import { test } from '@playwright/test';
import { ShopPage } from '/PlaywrightTypeScript/pageObjects/cartPage';

test('Test case 3: Buy 2 Stuffed Frog, 5 Fluffy Bunny, 3 Valentine Bear', async ({ page }) => {
  const shopPage = new ShopPage(page);

  await shopPage.gotoHomePage();
  await shopPage.navigateToShop();

  await shopPage.buyItem('Stuffed Frog', 2);
  await shopPage.buyItem('Fluffy Bunny', 5);
  await shopPage.buyItem('Valentine Bear', 3);

  await shopPage.goToCart();

  console.log('Sub-Total of the Stuffed Frog:', await shopPage.getSubtotal('Stuffed Frog'));
  console.log('Sub-Total of the Fluffy Bunny:', await shopPage.getSubtotal('Fluffy Bunny'));
  console.log('Sub-Total of the Valentine Bear:', await shopPage.getSubtotal('Valentine Bear'));

  console.log('Total Amount:', await shopPage.getTotal());

  await page.waitForTimeout(5000); // Optional: Just for visibility in demo
});

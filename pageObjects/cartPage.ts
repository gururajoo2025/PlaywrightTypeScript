import { Page, expect } from '@playwright/test';

export class ShopPage {
  constructor(private page: Page) {}

  async gotoHomePage() {
    await this.page.goto('https://jupiter.cloud.planittesting.com/#/');
    await expect(this.page).toHaveTitle('Jupiter Toys');
  }

  async navigateToShop() {
    await this.page.locator('#nav-shop').click();
  }

  async buyItem(productName: string, quantity: number) {
    const product = this.page.locator('div >> ul >> li').filter({ hasText: productName });
    for (let i = 0; i < quantity; i++) {
      await product.locator('.btn-success').click();
    }
  }

  async goToCart() {
    await this.page.locator("a[href='#/cart']").click();
  }

  async getSubtotal(productName: string): Promise<string | null> {
    const row = this.page.locator('tbody >> tr').filter({ hasText: productName });
    return row.locator('td:nth-child(4)').textContent();
  }

  async getTotal(): Promise<string | null> {
    return this.page.locator('.total.ng-binding').textContent();
  }
}
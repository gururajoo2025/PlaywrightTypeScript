import { expect, Locator, Page } from '@playwright/test';

export class ContactPage {
  readonly page: Page;
  readonly navContact: Locator;
  readonly submitButton: Locator;
  readonly forenameInput: Locator;
  readonly surnameInput: Locator;
  readonly emailInput: Locator;
  readonly telephoneInput: Locator;
  readonly messageInput: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navContact = page.locator('#nav-contact');
    this.submitButton = page.locator('.btn-contact');
    this.forenameInput = page.locator('#forename');
    this.surnameInput = page.locator("input[id='surname']");
    this.emailInput = page.locator('#email');
    this.telephoneInput = page.locator('#telephone');
    this.messageInput = page.locator('#message');
    this.successMessage = page.locator('.alert-success');
  }

  async navigate() {
    await this.page.goto('https://jupiter.cloud.planittesting.com/#/');
    await expect(this.page).toHaveTitle('Jupiter Toys');
  }

  async goToContact() {
    await this.navContact.click();
  }

  async clickSubmit() {
    await this.submitButton.click();
  }

  async fillForename(name: string) {
    await this.forenameInput.fill(name);
  }

  async fillSurname(name: string) {
    await this.surnameInput.fill(name);
  }

  async fillEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async fillTelephone(phone: string) {
    await this.telephoneInput.fill(phone);
  }

  async fillMessage(message: string) {
    await this.messageInput.fill(message);
  }

  async isValidationMessageVisible(text: string): Promise<boolean> {
    return (await this.page.getByText(text, { exact: true }).count()) === 1;
  }

  async getSuccessMessage(): Promise<string | null> {
    return await this.successMessage.textContent();
  }
}

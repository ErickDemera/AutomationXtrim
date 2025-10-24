import { Page, expect } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(path: string = '/') {
    await this.page.goto(path);
  }

  async clickOnText(text: string) {
    await this.page.getByText(text, { exact: true }).click();
  }

  async expectUrlContains(expected: string) {
    await expect(this.page).toHaveURL(new RegExp(expected));
  }
}
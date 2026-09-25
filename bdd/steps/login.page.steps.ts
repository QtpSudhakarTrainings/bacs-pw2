import { Given, When, Then } from '@cucumber/cucumber';
import { PlaywrightWorld } from "../support/world";
import { expect } from '@playwright/test';

Given('I visit vhrm login page', async function (this: PlaywrightWorld) {
  await this.page.goto('https://qtpsudhakar-vibetestq-hrm.up.railway.app/',{waitUntil: 'networkidle',timeout: 10000});
});

When('I enter {string} in the user name field', async function (this: PlaywrightWorld, userName) {
  await this.page.fill('input[name="username"]', userName);
});

When('I enter {string} in the password field', async function (this: PlaywrightWorld, password) {
  await this.page.fill('input[name="password"]', password);
});

When('I press the login button', async function (this: PlaywrightWorld) {
  await this.page.click('button[type="submit"]');
});

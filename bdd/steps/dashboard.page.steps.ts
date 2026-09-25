import { Given, When, Then } from '@cucumber/cucumber';
import { PlaywrightWorld } from "../support/world";
import { expect } from '@playwright/test';
import { getRandomNumber } from '../../datautils/datagen';

Then('I should see the dashboard page', async function (this: PlaywrightWorld) {
  await expect(this.page.getByRole('heading', { name: 'Dashboard' })).toBeVisible({timeout: 10000});
});

When('I click on PIM link', async function (this: PlaywrightWorld) {
  await this.page.getByRole('link', { name: 'PIM' }).click();
});


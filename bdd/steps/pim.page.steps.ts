import { PlaywrightWorld } from "../support/world";
import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { getRandomNumber } from '../../datautils/datagen';

Then('I should see the PIM page', async function (this: PlaywrightWorld) {
  await expect(this.page.getByRole('heading', { name: 'PIM' })).toBeVisible({timeout: 10000});
});

When('I click on Add Employee link', async function (this: PlaywrightWorld) {
  await this.page.getByRole('link', { name: 'Add Employee' }).click();
});


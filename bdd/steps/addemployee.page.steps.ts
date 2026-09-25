import { PlaywrightWorld } from "../support/world";
import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { getRandomNumber } from '../../datautils/datagen';

Then('I should see the Add Employee page', async function (this: PlaywrightWorld) {
  await expect(this.page.getByRole('heading', { name: 'Add Employee' })).toBeVisible({timeout: 10000});
});

When('I fill in the employee details with unique empid', async function (this: PlaywrightWorld) {
  await this.page.getByPlaceholder('First Name').fill('John');
  await this.page.getByPlaceholder('Last Name').fill('Doe');
  
  const uniqueEmpId = `EMP${getRandomNumber()}`;
  await this.page.locator("//label[text()='Employee Id']/../..//input").fill(uniqueEmpId);

});

When('I click on save button', async function (this: PlaywrightWorld) {
  await this.page.getByRole('button', { name: 'Save' }).click();
});

Then('I should see the successful message', async function (this: PlaywrightWorld) {
  await expect(this.page.getByText('Successfully')).toBeVisible({timeout: 10000});
});
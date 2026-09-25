import { test, expect } from '@playwright/test';

test('pages example', { tag: "@smoke" }, async ({ page }) => {

  // Browser: represents the entire browser instance
  //  Context: represents a browser context, like an incognito window
  //    Page: represents a single tab in the browser

  await page.goto('https://www.apsrtconline.in/oprs-web/');

  // page.on('dialog', async dialog => {
  //   console.log(dialog.message());
  //   await dialog.accept();
  // });

  page.once('dialog', async dialog => {
    expect(dialog.message()).toBe("Please select start place.");
    await dialog.accept();
  });
  await page.getByRole("button", { name: "Check Availability" }).click();

  let fPlace = "Hyderabad";
  let toPlace = "Vijayawada";

  //Enter from place
  await page.locator("#fromPlaceName").fill(fPlace);

  //select from Place
  await page.locator(`//span[text()='${fPlace.toUpperCase()}']`).click();

  page.once('dialog', async dialog => {
    expect(dialog.message()).toBe("Please select end place.");
    await dialog.accept();
  });
  await page.getByRole("button", { name: "Check Availability" }).click();

  //Enter to place
  await page.locator("#toPlaceName").fill(toPlace);

  //select to Place
  await page.locator(`//span[text()='${toPlace.toUpperCase()}']`).click();

  //click on calender
  await page.locator("#txtJourneyDate").click()

  //select a date from the calendar
  await page.locator("//span[contains(text(),'September')]/following::a[text()='30'][1]").click();
  //span[contains(text(),'September')]/../../..//a[text()='30']

  // await page.locator("div.ui-datepicker-group:has(span:has-text('September')) a:text('30')").click();

  await page.getByRole("button", { name: "Check Availability" }).click();

});

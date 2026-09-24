import { test, expect } from '@playwright/test';

test('pages example', async ({page }) => {
 
  // Browser: represents the entire browser instance
  //  Context: represents a browser context, like an incognito window
  //    Page: represents a single tab in the browser

  await page.goto('https://qtpsudhakar-vibetestq-hrm.up.railway.app/');

  // let pageEvent = page.context().waitForEvent("page");
  // await page.getByText("QtpSudhakar on LinkedIn").click();
  // let newPage = await pageEvent;

  let [newPage] = await Promise.all([
    page.context().waitForEvent("page"),
    page.getByText("QtpSudhakar on LinkedIn").click()
  ]);// Wait for all promises to resolve


  // const allPages = page.context().pages(); // Get all open pages in the current context
  // let newPage = allPages[allPages.length - 1];
  await newPage.bringToFront(); // Bring the new page to the front
  await newPage.waitForLoadState();
  await expect(newPage.getByRole("heading",{name:"Join LinkedIn"})).toBeVisible();
  await newPage.getByRole("textbox",{name:"Email"}).fill("sudhakar@vibtestq.com");

  await page.waitForTimeout(2000); // Wait for 1 second before bringing the original page back to the front
  await page.bringToFront(); // Bring the original page back to the front
  await page.getByPlaceholder("Username").fill("your-username");
});

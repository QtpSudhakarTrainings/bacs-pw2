//The tests should have .spec.js extension
import { test, expect, Page } from '@playwright/test';

//syntax for creating test

// test("test description", async ({ page }) => {
//     // test steps go here
// });

test("Remote", async ({ page }) => {

    //navigate to the HRM login page
    await page.goto("https://cloud.cdp.rpsconsulting.in/");
    await page.getByRole("textbox",{name:"Username"}).fill("27MAN0638_U11");
    await page.getByRole("textbox",{name:"Password"}).fill("P@%%w0rd@123");
    await page.getByRole("button", { name: "Login" }).click();

});

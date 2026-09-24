//The tests should have .spec.js extension
import { test, expect, Page } from '@playwright/test';
import creds from '../files/creds.json';
//syntax for creating test

// test("test description", async ({ page }) => {
//     // test steps go here
// });

test("HRM login test", async ({ page }) => {

    //navigate to the HRM login page
    await page.goto("https://qtpsudhakar-vibetestq-hrm.up.railway.app/");

    // await page.getByPlaceholder("Username").fill("admin");
    // await page.getByPlaceholder("Password").fill("admin123");
    // await page.getByRole("button", { name: "Login" }).click();
    
    await login(page, creds.admin.username, creds.admin.password);
    //assert that the login was successful
    await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();

});

async function login(page:Page, username:string, password:string) {

    await page.getByPlaceholder("Username").fill(username);
    await page.getByPlaceholder("Password").fill(password);
    await page.getByRole("button", { name: "Login" }).click();

}
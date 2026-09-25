import { test, expect } from '@playwright/test';

// test.describe.configure({ mode: 'serial' }); // Execute tests in serial mode
test.describe("VHRM Login Module", () => {

    // test.beforeAll(async ({ browser }) => {
    //     // await page.goto("https://qtpsudhakar-vibetestq-hrm.up.railway.app/");
    //     console.log("Run prerequisite steps before all tests:"+ test.info().title);
    // });

    // test.beforeEach(async ({ page }) => { 
    //     console.log("Run prerequisite steps before each test:"+ test.info().title);
    // });

    // test.afterEach(async ({ page }) => {
    //     console.log("Run cleanup steps after each test:"+ test.info().title);
    // });

    // test.afterAll(async ({  }) => {
    //     console.log("Run cleanup steps after all tests:"+ test.info().title);
    // });

    test("Valid Login Test",{tag:"@smoke"}, async ({ page }) => {
        //To execute tagged tests use the command: 
        // npx playwright test --grep "@smoke"

        //navigate to the HRM login page
        await page.goto("https://qtpsudhakar-vibetestq-hrm.up.railway.app/");

        await page.getByPlaceholder("Username").fill("bacspw");
        await page.getByPlaceholder("Password").fill("Sudhakar@123#");
        await page.getByRole("button", { name: "Login" }).click();

        //assert that the login was successful
        await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();

    });

    test("Invalid Login Test", async ({ page }) => {
        //navigate to the HRM login page
        await page.goto("https://qtpsudhakar-vibetestq-hrm.up.railway.app/");

        await page.getByPlaceholder("Username").fill("invaliduser");
        await page.getByPlaceholder("Password").fill("invalidpassword");
        await page.getByRole("button", { name: "Login" }).click();

        //assert that the login was unsuccessful
        await expect(page.getByRole("heading", { name: "Login" })).toBeVisible();

    });

    test("Empty Login Test", async ({ page }) => {
        //navigate to the HRM login page
        await page.goto("https://qtpsudhakar-vibetestq-hrm.up.railway.app/");

        await page.getByPlaceholder("Username").fill("");
        await page.getByPlaceholder("Password").fill("");
        await page.getByRole("button", { name: "Login" }).click();

        //assert that the login was unsuccessful
        await expect(page.getByText("Required")).toHaveCount(2);

    });

    test("Empty User Name Login Test", async ({ page }) => {
        //navigate to the HRM login page
        await page.goto("https://qtpsudhakar-vibetestq-hrm.up.railway.app/");

        await page.getByPlaceholder("Username").fill("");
        await page.getByPlaceholder("Password").fill("test");
        await page.getByRole("button", { name: "Login" }).click();

        //assert that the login was unsuccessful
        await expect(page.getByText("Required")).toHaveCount(1);

    });


    test("Empty Password Login Test", async ({ page }) => {
        //navigate to the HRM login page
        await page.goto("https://qtpsudhakar-vibetestq-hrm.up.railway.app/");

        await page.getByPlaceholder("Username").fill("test");
        await page.getByPlaceholder("Password").fill("");
        await page.getByRole("button", { name: "Login" }).click();

        //assert that the login was unsuccessful
        await expect(page.getByText("Required")).toHaveCount(1);

    });
});
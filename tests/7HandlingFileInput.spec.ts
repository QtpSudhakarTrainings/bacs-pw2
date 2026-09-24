import { test, expect, Page } from "@playwright/test"

test('Create Employee test', async ({ page }) => {
    // Navigate to the Vibe Test Q HRM application
    // Playwright automatically wait for page load
    // this is called navigation timeout
    // Default navigation timeout is 0 seconds
    // When it is set to 0, there is no timeout and Playwright will wait for test timeout

    await page.goto('https://qtpsudhakar-vibetestq-hrm.up.railway.app/');
    await expect(page.getByRole("heading", { name: "Login" })).toBeVisible({ timeout: 15000 });
    // await page.getByRole('textbox', { name: 'Username' }).fill("bacspw")
    await page.locator("input[name='username']").fill("bacspw");
    await page.getByRole('textbox', { name: 'Password' }).fill('Sudhakar@123#');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();

    await page.getByRole('link', { name: 'PIM' }).click();
    await page.getByRole('link', { name: 'Add Employee' }).click();

    let firstName = "bacs"
    let lastname = "user" + Date.now();
    // await page.getByRole('textbox', { name: 'Browse File' }).setInputFiles('file.jpg');
    // page.once("filechooser", async fileChooser => {
    //     await fileChooser.setFiles('files/orangehrm-logo.png');
    // });

    // const [fileChooser] = await Promise.all([
    //     page.waitForEvent("filechooser"),
    //     page.locator("button.employee-image-action").click()
    // ]);

    // await fileChooser.setFiles('files/orangehrm-logo.png');

    await selectFile(page, 'files/orangehrm-logo.png');
    await page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
    await page.getByRole('textbox', { name: 'Last Name' }).fill(lastname);
    // await page.getByRole('rbutton', { name: 'Save' }).click();
    await page.locator("//button[normalize-space()='Save']").click();

    // Verify successful creation of the employee
    await expect(page.getByText("successfully")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Personal Details" })).toBeVisible();


});

async function selectFile(page: Page, filePath: string| string[]) {
    const [fileChooser] = await Promise.all([
        page.waitForEvent("filechooser"),
        page.locator("button.employee-image-action").click()
    ]);

    await fileChooser.setFiles(filePath);

}
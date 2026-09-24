import { test, expect } from "@playwright/test"

test('Create Employee test', async ({ page }) => {
    // Navigate to the Vibe Test Q HRM application
    // Playwright automatically wait for page load
    // this is called navigation timeout
    // Default navigation timeout is 0 seconds
    // When it is set to 0, there is no timeout and Playwright will wait for test timeout

    page.on("requestfinished", async request => {
        if (request.url().includes("api/v2/pim/employees")) {
            console.log("************************")
            console.log('>>', request.method(), request.url());
            console.log(request.headers());
            console.log(request.postData());
            console.log(await request.response());
            //{"data":[],"meta":{"total":0},"rels":[]}
            let response = await request.response();
            
            let jsonResponse = await response?.json();
            //extract total number of employees
            let totalEmployees = jsonResponse.meta.total;
            console.log("Total Employees:", totalEmployees);
            console.log("************************")
        }
    });

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

    await page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
    await page.getByRole('textbox', { name: 'Last Name' }).fill(lastname);
    // await page.getByRole('rbutton', { name: 'Save' }).click();
    await page.locator("//button[normalize-space()='Save']").click();

    // Verify successful creation of the employee
    await expect(page.getByText("successfully")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Personal Details" })).toBeVisible();

    // Click on Admin link
    await page.getByRole('link', { name: 'Admin' }).click();

    await expect(page.getByRole("heading", { name: "System Users" })).toBeVisible();

    // Click on Add button to add a new system user
    await page.getByRole('button', { name: 'Add' }).click();
    await expect(page.getByRole("heading", { name: "Add User" })).toBeVisible();

    //select user role
    // await page.locator("label:text('User Role')").

    await page.locator("//label[text()='User Role']/../..//div[text()='-- Select --']").click();
    await page.locator("//div[text()='Admin123']").click();

    // Playwright CSS psudo class equivalent without using xpath
    // for  //label[text()='User Role']/../..//div[text()='-- Select --']
    // page.locator("label:text('User Role')").locator("..").locator("..").locator("div:text('-- Select --')").click();

    // using ~ (general sibling combinator in CSS)
    //This will work locator("div:has(label:text('User Role'))").last().locator("~ *:has(div:text('-- Select --'))")
    // Some more simplification using nth of child
    // locator("div:has(label:text('User Role'))").nth(-1).locator("~ *:has(div:text('-- Select --'))")

    // setTimeout( () => {
    //     debugger;
    // }, 5000);


});

// getbytext : Visible text on the page
// getbyplaceholder: Select element by its placeholder attribute value
// getbyalttext: Select element by its alt attribute value
// getbytitle: Select element by its title attribute value
// getbyLabel(): Select element by its associated label text
// getbyrole: Select element by its ARIA role
// getbytestid(): Select element by its data-testid attribute value


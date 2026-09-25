import { test, expect } from "@playwright/test";
// import { LoginPage } from "./../pages/login.page";
// import { AddEmpPage } from "./../pages/addemp.page";
// import { DashboardPage } from "./../pages/dashboard.page";

// It will import all the page objects from the pages directory
import { LoginPage, AddEmpPage, DashboardPage } from "./../pages";

test("Add Employee Test", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const addEmpPage = new AddEmpPage(page);

    await page.goto("https://qtpsudhakar-vibetestq-hrm.up.railway.app/");
    await loginPage.enterUsername("admin");
    await loginPage.enterPassword("admin123");
    await loginPage.clickLogin();
    await dashboardPage.verifyDashboardOpened();
    await dashboardPage.clickPIM();
    await addEmpPage.verifyAddEmployeePageVisible();
    await addEmpPage.enterFirstName("John");
    await addEmpPage.enterLastName("Doe");
    await addEmpPage.enterUniqEmployeeId();
    const employeeId = await addEmpPage.getEmployeeId();
    await addEmpPage.clickSave();
    await addEmpPage.verifySuccessMessageVisible();
});
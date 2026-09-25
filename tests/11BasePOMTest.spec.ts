import { test } from "../fixtures/basetest";
import { expect } from "@playwright/test";

test("Add Employee Test", async ({ page, loginPage, dashboardPage, addEmpPage }) => {

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
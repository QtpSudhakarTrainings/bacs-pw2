import { test } from "../fixtures/basetest";
import { expect } from "@playwright/test";

test("Add Employee Test", async ({ App, AppData }) => {
    
    await App.basePage.navigateTo("/");
    await App.loginPage.enterUsername(AppData.adminCreds.username);
    await App.loginPage.enterPassword(AppData.adminCreds.password);
    await App.loginPage.clickLogin();
    await App.dashboardPage.verifyDashboardOpened();
    await App.dashboardPage.clickPIM();
    await App.addEmpPage.verifyAddEmployeePageVisible();
    await App.addEmpPage.enterFirstName("John");
    await App.addEmpPage.enterLastName("Doe");
    await App.addEmpPage.enterUniqEmployeeId();
    const employeeId = await App.addEmpPage.getEmployeeId();
    await App.addEmpPage.clickSave();
    await App.addEmpPage.verifySuccessMessageVisible();
});
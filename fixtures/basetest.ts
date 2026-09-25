import { test as base } from '@playwright/test';
// import module with type json
import creds from "./../files/creds.json";
import { LoginPage, AddEmpPage, DashboardPage } from "./../pages";

type CredsType = {
    username: string;
    password: string;
    otp: number;
};

let apikey: string = "abcd";

export const test = base.extend<{
    adminCreds: CredsType,
    apikey: string,
    loginPage: LoginPage,
    addEmpPage: AddEmpPage,
    dashboardPage: DashboardPage
}>({
    // Define any fixtures or overrides here
    adminCreds: async ({ }, use) => {
        await use(creds.admin as CredsType);
    },
    apikey: async ({ }, use) => {
        await use(apikey);
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    addEmpPage: async ({ page }, use) => {
        await use(new AddEmpPage(page));
    },
    dashboardPage: async ({ page }, use) => {
        await use(new DashboardPage(page));
    }
});
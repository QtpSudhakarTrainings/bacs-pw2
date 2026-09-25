import { test as base } from '@playwright/test';
// import module with type json
import creds from "./../files/creds.json";
import { LoginPage, AddEmpPage, DashboardPage, BasePage } from "./../pages";

type CredsType = {
    username: string;
    password: string;
    otp: number;
};

type AppFixtures = {
    loginPage: LoginPage,
    addEmpPage: AddEmpPage,
    dashboardPage: DashboardPage,
    basePage: BasePage,
};
type AppData = {
    adminCreds: CredsType,
    apikey: string,
};
let apikey: string = "abcd";

export const test = base.extend<{
    App: AppFixtures,
    AppData: AppData
}>({
    // Define any fixtures or overrides here
    AppData: async ({ }, use) => {
        await use({
            adminCreds: creds.admin as CredsType,
            apikey: apikey,
        });
    },
    App: async ({ page }, use) => {
        await use({
            loginPage: new LoginPage(page),
            addEmpPage: new AddEmpPage(page),
            dashboardPage: new DashboardPage(page),
            basePage: new BasePage(page),
        });
    }
});
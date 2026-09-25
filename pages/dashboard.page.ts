import { expect, Locator, Page } from "@playwright/test";

export class DashboardPage {
    private page: Page;
    private lnkPIM: Locator;
    private lnkAdmin: Locator;
    private hdrDashboard: Locator;

    constructor(page: Page) {
        this.page = page;
        this.lnkPIM = page.getByRole('link', { name: 'PIM' }).describe("PIM link"); 
        this.lnkAdmin = page.getByRole('link', { name: 'Admin' }).describe("Admin link");
        this.hdrDashboard = page.getByRole('heading', { name: 'Dashboard' }).describe("Dashboard header");
    }
    async clickPIM() {
        await this.lnkPIM.click();
        console.log(`Clicked PIM link`);
    }

    async clickAdmin() {
        await this.lnkAdmin.click();
        console.log(`Clicked Admin link`);
    }

    async verifyDashboardOpened() {
        expect.soft(await this.hdrDashboard.isVisible()).toBe(true);
    }
}
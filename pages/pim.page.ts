import { expect, Locator, Page } from "@playwright/test";
export class PIMPage {
    private page: Page;
    private lnkAddEmployee: Locator;
    private hdrPIM: Locator;
    constructor(page: Page) {
        this.page = page;
        this.lnkAddEmployee = page.getByRole('link', { name: 'Add Employee' }).describe("Add Employee link");
        this.hdrPIM = page.getByRole('heading', { name: 'PIM' }).describe("PIM header");
    }

    async clickAddEmployee() {
        await this.lnkAddEmployee.click();
        console.log(`Clicked Add Employee link`);
    }
    async verifyPIMPageVisible() {
        await expect(this.hdrPIM).toBeVisible();
        console.log(`PIM page is visible`);
    }
}
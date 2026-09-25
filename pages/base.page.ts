import { Locator, Page } from "@playwright/test";

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string) {
        await this.page.goto(url);
        console.log(`Navigated to ${url}`);
    }
    async getPageTitle() {
        const title = await this.page.title();
        console.log(`Page title is ${title}`);
        return title;
    }
    async getNewPageFromEvent(locator:Locator){
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            locator.click(),
        ]);
        console.log(`New page opened`);
        return newPage;
    }

}
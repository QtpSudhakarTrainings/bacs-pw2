import { expect, Locator, Page } from "@playwright/test";
import { getRandomNumber } from "../datautils/datagen";
export class AddEmpPage {

    private page: Page;
    private txtFirstName: Locator;
    private txtLastName: Locator;
    private btnSave: Locator;
    private hdrAddEmp: Locator;
    private employeeid: Locator;
    private elmSuccessMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.txtFirstName = page.getByRole('textbox', { name: 'First Name' }).describe("First Name textbox");
        this.txtLastName = page.getByRole('textbox', { name: 'Last Name' }).describe("Last Name textbox");
        this.hdrAddEmp = page.getByRole('heading', { name: 'Add Employee' }).describe("Add Employee header");
        this.employeeid = page.locator("//label[text()='Employee Id']/../..//input").describe("Employee Id textbox");
        this.btnSave = page.getByRole('button', { name: 'Save' }).describe("Save button");
        this.elmSuccessMessage = page.getByText('Successfully').describe("Success message");
    }

    async enterFirstName(firstName: string) {
        await this.txtFirstName.fill(firstName);
        console.log(`Entered First Name: ${firstName}`);
    }

    async enterLastName(lastName: string) {
        await this.txtLastName.fill(lastName);
        console.log(`Entered Last Name: ${lastName}`);
    }

    async enterUniqEmployeeId(employeeId?: string) {
        if (!employeeId) {
            // employeeId = `EMP${Date.now()}`;
            employeeId = `EMP${getRandomNumber()}`;
        }
        await this.employeeid.fill(employeeId);
        console.log(`Entered Employee Id: ${employeeId}`);
    }

    async getEmployeeId() {
        const employeeId = await this.employeeid.inputValue();
        console.log(`Retrieved Employee Id: ${employeeId}`);
        return employeeId;
    }
    async clickSave() {
        await this.btnSave.click();
        console.log(`Clicked Save button`);
    }

    async verifySuccessMessageVisible() {
        await expect(this.elmSuccessMessage).toBeVisible();
        console.log(`Success message is visible`);
    }
    async verifyAddEmployeePageVisible() {
        await expect(this.hdrAddEmp).toBeVisible();
        console.log(`Add Employee page is visible`);
    }

}
// In every page we will have elements, actions and methods related to that page.

import { Locator, Page } from "@playwright/test"

export class LoginPage {
    private page: Page;
    private txtUserName: Locator;
    private txtPassword: Locator;
    private btnLogin: Locator;
    private txtOTP: Locator;
    constructor(page: Page) {
        this.page = page;
        // Initialize elements here if needed
        this.txtUserName = page.getByRole("textbox", { name: "Username" }).describe("Username input field"); 
        this.txtPassword = page.getByRole('textbox', { name: 'Password' }).describe("Password input field"); 
        this.btnLogin = page.getByRole('button', { name: 'Login' }).describe("Login button");
        this.txtOTP = page.getByRole('textbox', { name: 'OTP' }).describe("OTP input field"); 
    }

    async enterUsername(username: string) {
        await this.txtUserName.fill(username);
        console.log(`Entered username: ${username}`);
    }

    async enterPassword(password: string) {
        await this.txtPassword.fill(password);
        console.log(`Entered password: ${password}`);
    }

    async enterOTP(otp: string) {
        await this.txtOTP.fill(otp);
        console.log(`Entered OTP: ${otp}`);
    }
    async clickLogin() {
        await this.btnLogin.click();
        console.log(`Clicked login button`);
    }

    // Example method to perform login
    async login(username: string, password: string) {
        await this.txtUserName.fill(username);
        await this.txtPassword.fill(password);
        await this.btnLogin.click();
    }
}
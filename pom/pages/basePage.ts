import { Page } from "@playwright/test";
import { baseUrl } from "../../playwright.config";

export abstract class BasePage {
    readonly page: Page;
    protected abstract readonly path: string;

    constructor(page: Page) {
        this.page = page;
    }

    async open(slug: string = '', queryParams: string = '') {
        const url = new URL(`${this.path}${slug}`, baseUrl);

        if (queryParams) {
            for (const [key, value] of Object.entries(queryParams)) {
                url.searchParams.set(key, value);
            }
        }

        await this.page.goto(url.toString(), { waitUntil: 'load' });
    }
}
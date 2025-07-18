import { Page } from "@playwright/test";

export abstract class BaseBlock {
    readonly page: Page

    constructor(page: Page) {
        this.page = page;
    }
}
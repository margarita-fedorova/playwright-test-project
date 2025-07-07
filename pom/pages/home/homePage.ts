import { BasePage } from "../basePage";
import { HeaderBlock } from "../../blocks/headerBlock";
import { Page } from "@playwright/test";

export class HomePage extends BasePage {
    protected readonly path = '/';

    readonly headerBlock: HeaderBlock;

    constructor(page: Page) {
        super(page);
        this.headerBlock = new HeaderBlock(page);
    }
}
import { BasePage } from "../basePage";
import { Page } from "@playwright/test";
import { VideosBlock } from "../../blocks/videosBlock";

export class BestPage extends BasePage {
    protected readonly path = '/best';

    readonly videosBlock: VideosBlock;

    constructor(page: Page) {
        super(page);
        this.videosBlock = new VideosBlock(page);
    }
}
import { BasePage } from "../basePage";
import { Page } from "@playwright/test";
import { PlayerBlock } from "../../blocks/playerBlock";

export class VideoPage extends BasePage {
    protected readonly path = '/videos/';

    readonly playerBlock: PlayerBlock;

    constructor(page: Page) {
        super(page);
        this.playerBlock = new PlayerBlock(page);
    }

    async open(slug: string) {
        await super.open(`/${slug}`);
    }
}
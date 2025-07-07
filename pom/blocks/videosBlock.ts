import { test } from '@playwright/test';
import { getRandomNumber } from "../../common/utils/mathUtils";
import { BaseBlock } from "./baseBlock";

export class VideosBlock extends BaseBlock {
    readonly videos = this.page.locator('[data-el="ThumbsList"] [class*="thumb"]');

    async clickRandomVideo() {
        const videosCount = await this.videos.count();
        const randomVideoNumber = getRandomNumber(0, videosCount);
        await test.step(`Open '${randomVideoNumber}' video on best page`, async () => {
            await this.videos.nth(randomVideoNumber).click();
        });
    }
}

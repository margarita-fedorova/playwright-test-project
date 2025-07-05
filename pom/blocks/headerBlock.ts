import { BaseBlock } from "./baseBlock";
import { test } from "@playwright/test";
import { VideosCategory } from "../../common/constants/categories";

export class HeaderBlock extends BaseBlock {

    readonly videos = {
        button: this.page.locator('[class*="g-navbar__row_main-desktop"] [class*="g-navbar__link"][href="/"]'),
        dropdown: this.page.locator('[class*="g-navbar__dropdown_show"] [class="dropdown-item__text"]'),
    }

    async selectCategoryInVideosDropdown(videoFilter: VideosCategory) {
        await test.step(`Select '${videoFilter}' category in videos dropdown`, async () => {
            await this.videos.button.hover();
            await this.videos.dropdown.filter({ hasText: videoFilter }).click();
        });
    }
}
import { test } from "../baseFixtures";
import { VideosCategory } from "../../common/constants/categories";

test.describe('Play video', () => {
    test('Play video from "Best videos" page', async ({ homePage, bestPage, videoPage }) => {
        await homePage.open();
        await homePage.headerBlock.selectCategoryInVideosDropdown(VideosCategory.BEST_VIDEOS);

        await bestPage.videosBlock.clickRandomVideo();

        await videoPage.playerBlock.expectGetFullVideoMenuToBeVisible();
        await videoPage.playerBlock.expectMuteVolumeImageToBeVisible();
        await videoPage.playerBlock.expectVideoToBeMuted();
        await videoPage.playerBlock.expectVideoTimeToIncrease();
        await videoPage.playerBlock.expectVideoPlaying();
    });
});
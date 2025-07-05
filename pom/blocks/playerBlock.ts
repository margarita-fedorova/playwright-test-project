import {expect, test} from "@playwright/test";
import {BaseBlock} from "./baseBlock";

export class PlayerBlock extends BaseBlock {
    readonly videoPlayer = this.page.locator('#video-trailer');
    readonly getFullVideoMenu = this.page.locator('[class="video-purchase__menu"]')
        .or(this.page.locator('[class*="video-purchase__menu_"]'));
    readonly muteVolumeImage = this.page.locator('[class="icon icon_player-mute"]');

    async expectGetFullVideoMenuToBeVisible(): Promise<void> {
        await expect(this.getFullVideoMenu, 'Full video menu should be visible').toBeVisible();
    }

    async expectMuteVolumeImageToBeVisible(): Promise<void> {
        await expect(this.muteVolumeImage, 'Mute volume image should be visible').toBeVisible();
    }

    async expectVideoToBeMuted() {
        const isMuted = await this.videoPlayer.evaluate((node: HTMLVideoElement) => node.muted);
        expect(isMuted, 'Video should be muted').toBeTruthy();

    }

    async getActualVideoPlayingTime() {
        return await test.step('Get actual video playing time', async () => {
            return await this.videoPlayer.evaluate((node: HTMLVideoElement) => node.currentTime);
        });
    };

    async expectVideoTimeToIncrease(): Promise<void> {
        const timeBefore = await this.getActualVideoPlayingTime();
        await expect.poll(async () => {
            return await this.getActualVideoPlayingTime();
        }, {
            timeout: 5000,
            message: 'Expected video currentTime to increase',
        }).toBeGreaterThan(timeBefore);
    }

    async expectVideoPlaying(): Promise<void> {
        const screenshot1 = await this.videoPlayer.screenshot();
        await expect.poll(async () => {
            const screenshot2 = await this.videoPlayer.screenshot();
            return screenshot1.equals(screenshot2);
        }, {
            timeout: 5000,
            message: 'Expected video picture to change',
        }).toBe(false);
    }
}

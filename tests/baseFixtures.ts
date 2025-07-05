import { test as base } from '@playwright/test';
import { HomePage } from '../pom/pages/home/homePage';
import { BestPage } from "../pom/pages/best/bestPage";
import { VideoPage } from "../pom/pages/video/videoPage";

type CustomFixtures = {
    homePage: HomePage;
    bestPage: BestPage;
    videoPage: VideoPage;
};

export const test = base.extend<CustomFixtures>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    bestPage: async ({ page }, use) => {
        await use(new BestPage(page));
    },
    videoPage: async ({ page }, use) => {
        await use(new VideoPage(page));
    },
});
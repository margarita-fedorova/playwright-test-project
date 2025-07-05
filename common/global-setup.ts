import { chromium } from '@playwright/test';
import * as cookies from '../common/constants/cookies';
import { baseUrl } from "../playwright.config";

async function globalSetup() {
    const browser = await chromium.launch();
    const context = await browser.newContext();

    const url = new URL(baseUrl);
    const domain = url.hostname;

    await context.addCookies([
        {
            name: cookies.AGED_ENOUGH,
            value: cookies.AGED_ENOUGH_VALUES.YES,
            domain: domain,
            path: '/'
        },
        {
            name: cookies.COOKIE_SETTINGS,
            value: cookies.COOKIE_SETTINGS_ALL_VALUE,
            domain: domain,
            path: '/'
        },
    ]);

    await context.storageState({ path: './storageState.json' });
    await browser.close();
}

export default globalSetup;
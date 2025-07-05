import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

export const baseUrl = 'https://faphouse.com'

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'allure-playwright',
  globalSetup: require.resolve('./common/global-setup'),
  use: {
    baseURL: baseUrl,
    trace: 'on-first-retry',
    storageState: './storageState.json',
    headless: !!process.env.CI,
  },

  projects: [
    {
      name: 'Google Chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
        viewport: { width: 1280, height: 720 },
      },
    },
  ],
});
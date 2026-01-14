import {test, expect,Locator} from '@playwright/test';

test('Frame Handling', async ({page}) => {
   await page.goto("https://testautomationpractice.blogspot.com/");
   const frame = await page.frameLocator("#frame");
   await frame.locator("#inputField").fill("Hello Frame");
   const text = await frame.locator("#inputField").innerText();
   console.log(`Text inside frame: ${text}`);
});

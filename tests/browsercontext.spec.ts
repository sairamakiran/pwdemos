
import {test,expect,Locator,Page, BrowserContext, chromium, BrowserType} from '@playwright/test';

test('Browser Context Handling',async()=>{
   const browser= await chromium.launch();
   const context:BrowserContext = await browser.newContext();
   const page: Page = await context.newPage();
   await page.goto("https://example.com/");
   const title = await page.title();
   console.log(`Page title: ${title}`);
   expect(title).toBe("Example Domain");
   await context.close();
}); 
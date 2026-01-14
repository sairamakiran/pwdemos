
import {test,expect,Locator} from '@playwright/test';
test('Auto Suggest Dropdown Handling',async({page})=>{
    await page.goto("https://www.flipkart.com/");
   const searchInput: Locator = page.locator("input[name='q']");
   await searchInput.fill("smart");
   await page.waitForTimeout(2000); // Wait for suggestions to load
   const suggestions: Locator = page.locator("ul>li");
   const suggestionCount = await suggestions.count();
   console.log(`Total Suggestions: ${suggestionCount}`);
   for (let i = 0; i < suggestionCount; i++) {
       const suggestionText = await suggestions.nth(i).innerText();
       console.log(`Suggestion ${i + 1}: ${suggestionText}`);
       if (suggestionText.includes("smartphone")) {
           await suggestions.nth(i).click();
           break;
       }
   }
   expect(suggestionCount).toBeGreaterThan(0);
});

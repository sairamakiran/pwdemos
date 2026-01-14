import {test, expect,Locator} from '@playwright/test';

test('Dropdown/Picklist Actions',async({page})=>{

   await page.goto("https://testautomationpractice.blogspot.com/");
   await page.locator('#country').selectOption('Australia'); // Select by visible text
   await page.waitForTimeout(2000);
   await page.locator('#country').selectOption({value:'uk'}); // Select by value
   await page.waitForTimeout(2000);
   await page.locator('#country').selectOption({label:'India'});    // Select by Label
   await page.waitForTimeout(2000);
   await page.locator('#country').selectOption({index:4});  // Select by Index
   await page.waitForTimeout(2000); 
   const options = await page.locator('#country option');
    const optionCount = await options.count();
    await expect(options).toHaveCount(optionCount); // Assert total options count
   console.log(`Total options available: ${optionCount}`);
   await page.waitForTimeout(2000);
   const optionTexts = await options.evaluateAll((opts) => opts.map((o) => o.textContent));
   console.log(`Dropdown options are: ${optionTexts.join(', ')}`);
   
});
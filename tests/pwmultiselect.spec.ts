import {test,expect,Locator} from '@playwright/test';

test('Multi-Select Dropdown Actions',async({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/");
   const multiSelectDropdown:any=page.locator('#colors');
   await multiSelectDropdown.selectOption(['Red','Blue']);
   await page.waitForTimeout(2000);
   //using value to select options
   await multiSelectDropdown.selectOption([{value:'red'},{value:'green'}]);
   await page.waitForTimeout(2000);
   //using label to select options
   await multiSelectDropdown.selectOption([{label:'Red'}, {label:'Yellow'}]);
   //check the number of options in the dropdown(count)
    const options = await multiSelectDropdown.locator('option');
    const optionCount = await options.count();
    console.log(`Number of options in the dropdown: ${optionCount}`);
    const optionTexts: string[] = (await options.allTextContents()).map((text: string) => text.trim());
    console.log(`Options in the dropdown: ${optionTexts.join(', ')}`);
    await expect(options).toHaveCount(optionCount);
    expect(optionTexts).toContain('Green');
});

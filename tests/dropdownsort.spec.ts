import {test,expect,Locator} from '@playwright/test';
test('Dropdown Sort Verification',async({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/");
   const dropdown:Locator=page.locator('#animals>option');

    const optionCount = await dropdown.count(); 
    console.log(`Total options in the dropdown: ${optionCount}`);

    const optionTexts: string[] = (await dropdown.allTextContents()).map((text: string) => text.trim());
    //create 2 lists origianal and sorted and compare and use spread operator to create new arrays
   const originalArray = [...optionTexts];
   const sortedArray = [...optionTexts].sort();
   //print both arrays
   console.log(`Original Array: ${originalArray.join(', ')}`);
   console.log(`Sorted Array: ${sortedArray.join(', ')}`);
   expect(originalArray).toEqual(sortedArray);
});

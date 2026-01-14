import {test,expect,Locator} from '@playwright/test';
test('Duplciare Dropdown Values',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const animalDropdown:Locator=page.locator('#animals>option');//not having duplicates
    const colorsDropdown:Locator=page.locator('#colors>option');//having duplicates

    //find duplicates in colors dropdown
    const colorOptionCount = await colorsDropdown.count();
    const colorOptionTexts: string[] = (await colorsDropdown.allTextContents()).map((text: string) => text.trim());
    const colorDuplicates: string[] = [];
    const colorUniqueOptions: Set<string> = new Set();

    for (const text of colorOptionTexts) {
        if (colorUniqueOptions.has(text)) {
            if (!colorDuplicates.includes(text)) {
                colorDuplicates.push(text);
            }
        } else {
            colorUniqueOptions.add(text);
        }
    }
    console.log(`Colors Dropdown - Total Options: ${colorOptionCount}`);
    console.log(`Colors Dropdown - Duplicate Options: ${colorDuplicates.join(', ') || 'None'}`);
});
//how does set hold the values in line 11 where we have not added any values to it?
//In line 11, we initialize an empty Set called colorUniqueOptions. A Set is a built-in JavaScript object that stores unique values. When we use the add() method on a Set, it only adds the value if it is not already present in the Set. This property of Sets allows us to easily track unique options as we iterate through the colorOptionTexts array. If we encounter a text that is already in the Set, we know it's a duplicate and can handle it accordingly.
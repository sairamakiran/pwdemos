import {test, expect,Locator} from '@playwright/test';

test('Dialog Handling',async({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/");
   page.on('dialog', async(dialog) => {
      console.log(`Dialog type: ${dialog.type()}`);
      console.log(`Dialog message: ${dialog.message()}`);
      await dialog.accept(); // Accept the dialog
   });
   //Handling Alert Dialog
  await page.locator("#alertBtn").click();
  await page.waitForTimeout(5000);
});

test.only('Confirmation Dialog Handling',async({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/");
   page.on('dialog', async(dialog) => {
      console.log(`Dialog type: ${dialog.type()}`);
      console.log(`Dialog message: ${dialog.message()}`);
      await dialog.accept(); // Accept the dialog
     //await dialog.dismiss(); // Dismiss the dialog


   });
 // await page.locator("#confirmBtn").click();
   await page.locator("promptBtn").click();
  const text:String=await page.locator("#demo").innerText();
  console.log(`Text before confirmation dialog: ${text}`);
  await page.waitForTimeout(5000);
});
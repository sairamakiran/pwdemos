import { test, expect } from '@playwright/test';

test('Verify title page', async({page}) => {
    await page.goto('http://www.automationpractice.pl/index.php');
    let title:string = await page.title();
    console.log(title);
    await expect(page).toHaveTitle('My Shop');
});
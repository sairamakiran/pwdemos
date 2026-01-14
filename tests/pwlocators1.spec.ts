import {test, expect, Locator} from '@playwright/test';
/* page.getByAltText is used to locate the element with alt attribute value*/
test('Playwright Locators', async({page}) => {
  await page.goto('https://demo.nopcommerce.com/');
  const logo:Locator =page.getByAltText('nopCommerce demo store');
  //Await is needed when statement returns a promise
  //Await is required when we perform any action on the element
  // logo.click();
  await expect(logo).toBeVisible();
});
/*page.getByText is used to locate the element with exact text*/
test('Playwright Locators - getByVisibleText', async({page}) => {
  await page.goto('https://demo.nopcommerce.com/');
  await expect(page.getByText('Welcome to our store')).toBeVisible();
 await page.getByRole('link', { name: 'Register' }).click();

// Normal assertion
await expect(
  page.getByRole('heading', { name: 'Register'})).toBeVisible();

page.getByLabel('First name:').fill('John');
page.getByLabel('Last name:').fill('Doe');
page.getByLabel('Email:').fill('john.doe@example.com');

});




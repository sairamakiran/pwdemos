// xpath examples using playwright
import { test, expect } from '@playwright/test';

test('XPath Locators in Playwright', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/');

  // Using XPath to locate the search box by its placeholder attribute
  const searchBox = page.locator('//input[@placeholder="Search store"]');
  await expect(searchBox).toBeVisible();

  // Using XPath to locate the logo by its alt attribute
  const logo = page.locator('//img[@alt="nopCommerce demo store"]');
  await expect(logo).toBeVisible();
  
  // Using XPath to locate the "Register" link by its text
  const registerLink = page.locator('//a[text()="Register"]');
  await expect(registerLink).toBeVisible();
});

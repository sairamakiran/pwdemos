import { test, expect } from '@playwright/test';
/**
 * DEMO: Playwright CSS Selector Strategies
 * Site: https://demo.nopcommerce.com
 */

/* ---------------------------------------------------
   1. CSS Selector: ID
--------------------------------------------------- */
test('CSS Selector: ID', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/', {
    waitUntil: 'domcontentloaded',
  });

  await expect(
    page.locator('input#small-searchterms')
  ).toBeVisible();
});

/* ---------------------------------------------------
   2. CSS Selector: Class
--------------------------------------------------- */
test('CSS Selector: Class', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/', {
    waitUntil: 'domcontentloaded',
  });

  await expect(
    page.locator('input.search-box')
  ).toBeVisible();

});

/* ---------------------------------------------------
   3. CSS Selector: Attribute
--------------------------------------------------- */
test('CSS Selector: Attribute', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/', {
    waitUntil: 'domcontentloaded',
  });

  await expect(
    page.locator('input[name="q"]')
  ).toBeVisible();
});

/* ---------------------------------------------------
   4. CSS Selector: Child
--------------------------------------------------- */
test('CSS Selector: Child', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/', {
    waitUntil: 'domcontentloaded',
  });

  await expect(
    page.locator('div.header-menu > ul > li')
  ).toHaveCount(5);
});

/* ---------------------------------------------------
   5. CSS Selector: Descendant
--------------------------------------------------- */
test('CSS Selector: Descendant', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/', {
    waitUntil: 'domcontentloaded',
  });

  await expect(
    page.locator('div.header-menu ul li')
  ).toHaveCount(5);
});

/* ---------------------------------------------------
   6. CSS Selector: Sibling
--------------------------------------------------- */
test('CSS Selector: Sibling', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/', {
    waitUntil: 'domcontentloaded',
  });

  await expect(
    page.locator('div.header-menu > ul > li + li')
  ).toHaveText('Computers');
});

/* ---------------------------------------------------
   7. CSS Selector: Pseudo-class
--------------------------------------------------- */
test('CSS Selector: Pseudo-class', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/', {
    waitUntil: 'domcontentloaded',
  });

  await expect(
    page.locator('ul.menu > li:first-child')
  ).toHaveText('Home');
});

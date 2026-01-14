import { test, expect } from '@playwright/test';

/**
 * DEMO: Playwright Locator Strategies
 * Site: https://demo.nopcommerce.com
 */

/* ---------------------------------------------------
   1. getByAltText() — Images & elements with alt text
--------------------------------------------------- */
test('Locator: getByAltText', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/', {
    waitUntil: 'domcontentloaded',
  });

  await expect(
    page.getByAltText('nopCommerce demo store')
  ).toBeVisible();
});

/* ---------------------------------------------------
   2. getByText() — Non-interactive visible text
--------------------------------------------------- */
test('Locator: getByText', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/', {
    waitUntil: 'domcontentloaded',
  });

  await expect(
    page.getByText(/Welcome\s+to\s+our\s+store/i)
  ).toBeVisible();
});

/* ---------------------------------------------------
   3. getByRole() — Accessible & interactive elements
--------------------------------------------------- */
test('Locator: getByRole', async ({ page }) => {
  await page.goto(
    'https://demo.nopcommerce.com/register?returnUrl=%2F',
    { waitUntil: 'domcontentloaded' }
  );

  await expect(
    page.getByRole('heading', { name: 'Register', level: 1 })
  ).toBeVisible();
});

/* ---------------------------------------------------
   4. getByLabel() — Form controls with labels
--------------------------------------------------- */
test('Locator: getByLabel', async ({ page }) => {
  await page.goto(
    'https://demo.nopcommerce.com/register?returnUrl=%2F',
    { waitUntil: 'domcontentloaded' }
  );

  await page.getByLabel('First name:').fill('John');
  await page.getByLabel('Last name:').fill('Doe');
  await page.getByLabel('Email:').fill('john.doe@example.com');

  await expect(page.getByLabel('Email:')).toHaveValue(
    'john.doe@example.com'
  );
});

/* ---------------------------------------------------
   5. getByPlaceholder() — Inputs without labels
--------------------------------------------------- */
test('Locator: getByPlaceholder', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/', {
    waitUntil: 'domcontentloaded',
  });

  await page
    .getByPlaceholder('Search store')
    .fill('Apple MacBook Pro');
});

/* ---------------------------------------------------
   6. getByTitle() — Elements with title attribute
--------------------------------------------------- */
test('Locator: getByTitle', async ({ page }) => {
  await page.goto(
    'file:///Users/sai_rama_kiran/Downloads/ClassDemos%205/app.html',
    { waitUntil: 'domcontentloaded' }
  );

  await expect(
    page.getByTitle('Home page link')
  ).toHaveText('Home');

  await expect(
    page.getByTitle('HyperText Markup Language')
  ).toHaveText('HTML');
});

/* ---------------------------------------------------
   7. getByTestId() — Stable automation hooks
--------------------------------------------------- */
test('Locator: getByTestId', async ({ page }) => {
  await page.goto(
    'file:///Users/sai_rama_kiran/Downloads/ClassDemos%205/app.html',
    { waitUntil: 'domcontentloaded' }
  );

  await expect(
    page.getByTestId('profile-email')
  ).toHaveText('john.doe@example.com');

  await expect(
    page.getByTestId('profile-name')
  ).toHaveText('John Doe');
});

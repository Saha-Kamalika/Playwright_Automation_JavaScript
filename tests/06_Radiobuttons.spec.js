const {test, expect} = require('@playwright/test');

test('Radiobuttons', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForTimeout(2000);

    await page.locator('//input[@id="male"]').check();
    await expect(page.locator('//input[@id="male"]')).toBeChecked();

    // Use locator matcher instead of calling isChecked() which returns a Promise
    await expect(page.locator('//input[@id="female"]')).not.toBeChecked();

    await page.waitForTimeout(2000);
})
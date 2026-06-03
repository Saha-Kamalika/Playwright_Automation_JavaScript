const {test, expect} = require('@playwright/test');

test('Inputbox', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.waitForTimeout(2000); 
    await expect(await page.getByPlaceholder('Username')).toBeVisible();
    await expect(await page.getByPlaceholder('Username')).toBeEnabled();
    await expect(await page.getByPlaceholder('Username')).toBeEmpty();
    await expect(await page.getByPlaceholder('Username')).toBeEditable();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.waitForTimeout(2000); 
})
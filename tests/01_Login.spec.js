import {test, expect} from '@playwright/test';

test('Login', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin'); //built in locator function to locate element using placeholder and fill the value
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', {name: 'Login'}).click();
    const user = await page.locator('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[3]/ul/li/span/p').textContent(); //locate element using XPath and get text content  
    await expect(page.getByText(user)).toBeVisible(); //using built-in expect function to check if the user name is visible on the page     
})
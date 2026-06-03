const {test, expect} = require('@playwright/test');

test('Assertions', async ({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page).toHaveTitle('OrangeHRM'); //using built in expect function to check if the title of the page is correct
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await expect(page.getByPlaceholder('Username')).toHaveValue('Admin'); //using built in expect function to check if the value of username field is correct
    await expect(page.getByPlaceholder('Password')).toHaveValue('admin123');
    const loginBtn = await page.getByRole('button', {name: 'Login'});
    await expect(loginBtn).toHaveAttribute('type', 'submit');
    await loginBtn.click();
    const dashboard = await page.locator('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module');
    await expect(dashboard).toHaveText('Dashboard'); //using built in expect function to check if the text of dashboard is correct  
    await expect(dashboard).toContainText('Dash'); //using built in expect function to check if the text of dashboard contains 'Dash'   
    await page.locator('(//span[normalize-space()="PIM"])[1]').click();
    const empStatusDropdown = page.locator('div.oxd-select-text-input').first();
    await empStatusDropdown.click();
    const empStatusOptions = page.locator('.oxd-select-dropdown .oxd-select-option');
    await expect(empStatusOptions).toHaveCount(7);
})
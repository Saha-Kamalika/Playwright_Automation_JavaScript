const {test, expect} = require('@playwright/test');

test('Checkboxes', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForTimeout(2000);     
    
    const checkboxSelectors = ['//input[@id="sunday"]', '//input[@id="monday"]', '//input[@id="tuesday"]'];

    for(const selector of checkboxSelectors) {
        await page.locator(selector).check();
        // await expect(page.locator(selector)).toBeChecked();
    }   
    await page.waitForTimeout(5000);
    for(const selector of checkboxSelectors) {
        if(await page.locator(selector).isChecked()) {
            await page.locator(selector).uncheck();
        }
    }   
    await page.waitForTimeout(2000);
})
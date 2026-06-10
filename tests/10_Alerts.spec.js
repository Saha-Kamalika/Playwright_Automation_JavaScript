const {test, expect} = require('@playwright/test');

test.skip('Alerts', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForTimeout(2000);
    // Handle the alert dialog
    page.on('dialog', async (dialog) => {
        await expect(dialog.type()).toBe('alert');
        await expect(dialog.message()).toBe('I am an alert box!');
        await dialog.accept();
    })

    await page.locator('//button[@id="alertBtn"]').click();
    await page.waitForTimeout(5000);
})

test.skip('Confirm Dialog', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForTimeout(2000);
    // Handle the alert dialog
    page.on('dialog', async (dialog) => {
        await expect(dialog.type()).toBe('confirm');
        await expect(dialog.message()).toBe('Press a button!');
        await dialog.accept();
    })

    await page.locator("//button[@id='confirmBtn']").click();
    await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!');    
    await page.waitForTimeout(5000);
})

test('Prompt Dialog', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForTimeout(2000);
    // Handle the alert dialog
    page.on('dialog', async (dialog) => {
        await expect(dialog.type()).toBe('prompt');
        await expect(dialog.message()).toBe('Please enter your name:');
        await expect(dialog.defaultValue()).toBe('Harry Potter');
        await dialog.accept('Kamalika');
    })

    await page.locator("//button[@id='promptBtn']").click();
    await expect(page.locator("//p[@id='demo']")).toHaveText('Hello Kamalika! How are you today?');    
    await page.waitForTimeout(5000);
})
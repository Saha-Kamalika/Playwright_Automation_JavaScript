const {test, expect} = require('@playwright/test');

test('AutoComplete Dropdown', async ({page}) => {
    await page.goto('https://www.redbus.in/');
    await page.waitForTimeout(2000);

    await page.locator('#srcinput').type('Kolkata');
    await page.waitForSelector('//div[contains(@class, "listHeader___224ec6")]');

    const options = await page.$$('//div[contains(@class, "listHeader___224ec6")]');
    for(const opt of options){
        let text = await opt.textContent();
        text = text.trim();
        if(text.includes('Karunamoyee')){
            await opt.click();
            break;
        }
    }
    await page.waitForTimeout(5000);
});
const {test, expect} = require('@playwright/test');

test('Dropdowns', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForTimeout(2000);

    // await page.locator('//select[@id="country"]').selectOption({label: 'India'}); //based on visible text
    // await page.waitForTimeout(2000);
    // await page.locator('//select[@id="country"]').selectOption("India"); //based on visible text
    // await page.waitForTimeout(2000);
    // await page.locator('//select[@id="country"]').selectOption({value: 'india'}); //based on value attribute
    // await page.waitForTimeout(2000);
    // await page.locator('//select[@id="country"]').selectOption({index: 3}); //based on index
    // await page.waitForTimeout(2000);    
    // await page.selectOption('//select[@id="country"]', {label: 'India'}); //based on visible text
    // await page.waitForTimeout(2000);

    // const options = await page.locator('//select[@id="country"]/option');
    // // await expect(options).toHaveCount(10);
    // const allOptions = (await page.locator('//select[@id="country"]/option').allTextContents()).map(text => text.trim());
    // if (allOptions.includes('India')) {
    //     console.log('India is present in the dropdown');
    // } else {
    //     console.log('India is not present in the dropdown');
    // }

    // const options = await page.$$('#country option');
    // var status = false;
    // for(const opt of options){
    //     const text = await opt.textContent();
    //     if(text.trim().includes('India')){
    //         status = true;
    //         break;
    //     }
    // }
    // if(status) console.log('India is present in the dropdown');
    // else console.log('India is not present in the dropdown');

    const options = await page.$$('#country option');
    for(const opt of options){
        let text = await opt.textContent();
        text = text.trim();
        if(text.includes('India')){
            await page.selectOption('#country', {label: text});
            break;
        }
    }
    await page.waitForTimeout(5000);
})
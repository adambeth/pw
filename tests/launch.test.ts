import { chromium } from '@playwright/test'

describe('Launch test', () => {
    test('Launch test', async  () => {
       const browser = await chromium.launch({
           headless:true
       });
       const context = await browser.newContext({
        //    storageState:"cookies.json"
       });
       const page = await context.newPage();

        await page.goto('http://dev.getmyboat.com/s/auth/login/')
        await  page.waitForSelector('[placeholder="Email Address"]')
        await page.fill('[placeholder="Email Address"]', 'owner@testmyboat.com')
        await page.fill('[placeholder="Password"]', 'password')
        await page.click('text="Close"');
        await page.click('text="Sign In"');
        await  page.waitForNavigation({
        timeout:60000,
        url:"http://dev.getmyboat.com/"
  })
// await page.waitForEvent('load')

        await page.context().storageState({path: 'cookies1.json'})
        await browser.close();

    })

    test.only('Login', async  () => {

        const browser = await chromium.launch({
            headless:false,
            args: ['--start-maximized']
        });
        const context = await browser.newContext({
            storageState:"cookies1.json"
        });
        const page = await context.newPage();
 
         await page.goto('http://dev.getmyboat.com/inbox/22002/')
         await page.click('text="Create Offer"')
         await page.fill('[id="subtotal"]',"100")
         await page.click('text="Send Offer"')
         await browser.close();
 
     })
})
import { Browser} from '@playwright/test'
declare const browser:Browser;
describe.only('Launch test', () => {

    test.skip('Launch test', async  () => {
        const context = await browser.newContext();
        const page = await context.newPage()
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


        // await page.context().storageState({path: 'cookies.json'})
        await context.close()

    })

    test('Send Offer', async  () => {
        const context = await browser.newContext({
            storageState:'cookies.json'

        });

        const page = await context.newPage()
         await page.goto('http://dev.getmyboat.com/inbox/22002/')
        //  await page.click('text="Create Offer"')
        //  await page.fill('[id="subtotal"]',"100")
        //  await page.click('text="Send Offer"')
         await context.close()
 
     })



     afterAll(async () => {
         await browser.close();
     })
})
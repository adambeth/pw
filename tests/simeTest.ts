import { chromium } from '@playwright/test';
// import chromium from '@playwright/test';
describe('Launch Browser', () => {
  jest.setTimeout(60000)
  // test.use({storageState: 'state1.json'})
  test('basic test',async  ({}) => {
   const browser = await chromium.launch({
     headless:false,
   })
   const page = await browser.newPage()
  await page.goto('http://dev.getmyboat.com/s/auth/login/')
  await page.fill('[placeholder="Email Address"]', 'owner@getmyboat.com')
  await page.fill('[placeholder="Password"]', 'password')
  await page.click('text="Close"');
  await page.click('text="Sign In"');

  // page.waitForNavigation({
  //   timeout:30000,
  //   url:"http://dev.getmyboat.com/"
  // })
  // await page.context().storageState({path: 'cookies.json'})

  await browser.close();


})
})


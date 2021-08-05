import { Browser, chromium , BrowserContext, Page} from '@playwright/test'
describe.skip('Forgot me password', () => {
    let browser: Browser;
    let context: BrowserContext;
    let page:Page;

    beforeEach(async () => {
         browser = await chromium.launch({
            headless:false,
            channel:'chrome'
        });
        context = await browser.newContext({
            storageState:"banner.json"
        });
        page = await context.newPage();

    })
test.only('Forgot Password', async  () => {

        await page.goto('http://dev.getmyboat.com/s/auth/login/')
        const signIn= new SignInPage(page);
        const forgotPage = new ForgotPasswordPage(page)
        await signIn.ForgotPassword();
        await forgotPage.ResetPassword()
        await page.waitForNavigation({
            url:"http://dev.getmyboat.com/s/auth/password/forgot/submitted/"
        })
        const title = await page.title();
        console.log(title)
        expect(title).toEqual('Check your inbox! | GetMyBoat')
        await page.click('text="Done"')
  
    })

 

    afterEach(async () => {
        await browser.close();
    })
})
import {test, expect, Page} from '@playwright/test'

 test("Customer feedback", async({page} : { page : Page})=>
        {
            await page.goto("https://jupiter.cloud.planittesting.com/#/");

            console.log(await page.title());
            await expect(page).toHaveTitle("Jupiter Toys");

            //From the home page go to contact page

            
            await page.locator("#nav-contact").click();   
            await page.waitForTimeout(3000);

            // Enter the form

            await page.locator("#forename").fill("Gururaj");
            await page.locator("input[id='surname']").fill("Rathnam");
            await page.locator(".ng-valid-email").fill("gr@gmail.com");
            await page.locator("#telephone").fill("024789658325");
            await page.locator("#message").fill("This is test for test case 2");
            await page.locator(".btn-contact").click();
            await page.waitForTimeout(3000);

            //Feedback confirmation
            console.log(await page.locator(".alert-success").textContent());

    });

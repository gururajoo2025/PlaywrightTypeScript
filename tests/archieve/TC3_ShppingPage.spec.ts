import { Page, expect, test } from "@playwright/test";

test("Test case 3:Buy 2 Stuffed Frog, 5 Fluffy Bunny, 3 Valentine Bear",async({page} : { page : Page})=>
    {
        await page.goto("https://jupiter.cloud.planittesting.com/#/");
        console.log(await page.title());
        await expect(page).toHaveTitle("Jupiter Toys");

        //Enter Shop

        await page.locator("#nav-shop").click();
        // await page.getByText("Stuffed Frog");

        // await page.locator("div>>ul>>li").filter({hasText:'Stuffed Frog'}).getByRole("button",{name:'Buy'}).click();

        
        // await page.locator("li[id='product-2'] a[class='btn btn-success']").click();
        // await page.locator("li>>div").filter({hasText:" Stuffed Frog"}).locator("li>>div>>p>>a").click();

        await page.locator("div>>ul>>li").filter({hasText:'Stuffed Frog'}).locator(".btn-success").click();
        await page.locator("div>>ul>>li").filter({hasText:'Stuffed Frog'}).locator(".btn-success").click();

        await page.locator("div>>ul>>li").filter({hasText:'Fluffy Bunny'}).locator(".btn-success").click();
        await page.locator("div>>ul>>li").filter({hasText:'Fluffy Bunny'}).locator(".btn-success").click();
        await page.locator("div>>ul>>li").filter({hasText:'Fluffy Bunny'}).locator(".btn-success").click();
        await page.locator("div>>ul>>li").filter({hasText:'Fluffy Bunny'}).locator(".btn-success").click();
        await page.locator("div>>ul>>li").filter({hasText:'Fluffy Bunny'}).locator(".btn-success").click();

        await page.locator("div>>ul>>li").filter({hasText:'Valentine Bear'}).locator(".btn-success").click();
        await page.locator("div>>ul>>li").filter({hasText:'Valentine Bear'}).locator(".btn-success").click();
        await page.locator("div>>ul>>li").filter({hasText:'Valentine Bear'}).locator(".btn-success").click();


        //go to cart
        await page.locator("a[href='#/cart']").click();

        console.log("Sub-Total of the Stuffed Frog", await page.locator("tbody>>tr").filter({hasText:" Stuffed Frog"}).locator("td:nth-child(4)").textContent());
        console.log("Sub-Total of the Fluffy Bunny", await page.locator("tbody>>tr").filter({hasText:" Fluffy Bunny"}).locator("td:nth-child(4)").textContent());
        console.log("Sub-Total of the Valentine Bear", await page.locator("tbody>>tr").filter({hasText:" Valentine Bear"}).locator("td:nth-child(4)").textContent());

        //Total Amount
        console.log(await page.locator(".total.ng-binding").textContent());

        //check sub-totals
        await page.waitForTimeout(5000);

        
    });

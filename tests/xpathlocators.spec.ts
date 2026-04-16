import {test,expect,Locator} from "@playwright/test";

test("Xpath demo in playwright", async ({page}) => {

    //absolute xpath 

    await page.goto("https://demo.nopcommerce.com/");
   // const absoluteLogo:Locator = page.locator("//html/body/div[6]/header/div[2]/div[1]/a/img")
    //await expect(absoluteLogo).toBeVisible();

    //relative xpath 

    const relativeLogo:Locator = page.locator("//img[@alt='nopCommerce demo store']");
    await expect(relativeLogo).toBeVisible();

    //contains method 

    const products:Locator = await page.locator("//button[contains(text(),'Add to cart')]");

    const productscount:Number = await products.count();
    console.log("No of Add to cart button : ", productscount);

})
 
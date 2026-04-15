import {test, expect, Locator} from "@playwright/test";

test(" Verify playwright locators", async ({page}) => {

    await page.goto("https://demo.nopcommerce.com/");

    //page.getByALTText() -  mainly for images or similar elements 
    //based on alt attribute sometime area img elements 

    const logo:Locator = await page.getByAltText("nopCommerce demo store");

    await expect(logo).toBeVisible();

//page.getByText() . find element with text 

    //const text = page.getByText("Welcome to our store");
    //await expect(text).toBeVisible();

    await expect(page.getByText("Welcome to our store")).toBeVisible();

    //getByRole , several roles have different role like listitem checkbook header etc.., 
    await page.getByRole('link', { name: 'Register' }).click();

  await expect(page).toHaveURL(/\/register(\?|$)/);
  await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible();



})
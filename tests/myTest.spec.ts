import {test,expect} from "@playwright/test";
/*
test("title", () => {

    //step 1 
    //step 2
    //step 3

})
    */
   // fixture - global variable:  page:browser

test("verify page title", async ({page}) => {

    await page.goto("https://practice.expandtesting.com/");
    
    let title:String = await page.title();
    console.log("title:", title); 

    await expect(page).toHaveTitle("Automation Testing Practice Website for QA and Developers | UI and API");
    


})
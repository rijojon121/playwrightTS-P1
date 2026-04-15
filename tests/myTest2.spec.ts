import {test,expect} from "@playwright/test";
import { url } from "node:inspector";

test("verify url", async ({page}) => {

    await page.goto("https://practice.expandtesting.com/");
    
    let Url:String = await page.url();
    console.log("Url:", url); 

    await expect(page).toHaveURL(/practice/);
    


})
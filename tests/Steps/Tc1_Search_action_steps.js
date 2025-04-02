import { createBdd } from "playwright-bdd"
import { test } from "../Fixtures/fixture";
import { expect } from "@playwright/test";

const {Given, Then , When } = createBdd(test)


Given('the user is on the Snapdeal homepage', async ({homepage}) => {

//await homepage.goto_page();
console.log("I am snapdeal page")


  });
  
  When('the homepage is loaded properly', async ({homepage}) => {
await homepage.popupinteraction();
await homepage.Account_Tab_verify();


  });
  
  When("the user clicks on the Men's Fashion category", async ({homepage}) => {

    await homepage.mens_fashion_option();
  });
  
  Then('the user clicks on the Formal Shoes category', async ({homepage}) => {
    
    await homepage.formal_shoe_option();
    console.log("This in formal shoes ");
    
   
  });
  
  Then('only formal shoes are listed properly', async ({homepage}) => {
  
    await homepage.product_verify();
    //await homepage.close();
  
  });